const WINDOW_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 3;
const BLOCK_MS = 60 * 60 * 1000;
const WHATSAPP_NUMBER = "559185026381";

const SIZES = [
  "Pequena (até 6 cm)",
  "Média (entre 7 e 14 cm)",
  "Grande (acima de 15 cm)",
  "Projeto complexo",
] as const;

type Bucket = {
  stamps: number[];
  blockedUntil: number;
};

type LimitStore = Map<string, Bucket>;

const globalStore = globalThis as typeof globalThis & {
  __obsidianContactLimits?: LimitStore;
};

function limits(): LimitStore {
  globalStore.__obsidianContactLimits ??= new Map();
  return globalStore.__obsidianContactLimits;
}

export type ContactFields = {
  name: string;
  placement: string;
  size: string;
  idea: string;
};

export function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first.slice(0, 80);
  }
  const realIp = request.headers.get("x-real-ip")?.trim();
  if (realIp) return realIp.slice(0, 80);
  return "unknown";
}

export function consumeContactAttempt(ip: string): { ok: true } | { ok: false; retryAfter: number } {
  const now = Date.now();
  const store = limits();
  if (store.size > 5000) {
    for (const [key, bucket] of store) {
      const idle = bucket.stamps.every((stamp) => now - stamp > WINDOW_MS);
      if (bucket.blockedUntil <= now && idle) store.delete(key);
    }
  }

  const bucket = store.get(ip) ?? { stamps: [], blockedUntil: 0 };
  if (bucket.blockedUntil > now) {
    return { ok: false, retryAfter: Math.ceil((bucket.blockedUntil - now) / 1000) };
  }

  bucket.blockedUntil = 0;
  bucket.stamps = bucket.stamps.filter((stamp) => now - stamp < WINDOW_MS);
  if (bucket.stamps.length >= MAX_ATTEMPTS) {
    bucket.blockedUntil = now + BLOCK_MS;
    bucket.stamps = [];
    store.set(ip, bucket);
    return { ok: false, retryAfter: Math.ceil(BLOCK_MS / 1000) };
  }

  bucket.stamps.push(now);
  store.set(ip, bucket);
  return { ok: true };
}

function asString(value: unknown): string | null {
  return typeof value === "string" ? value : null;
}

function cleanLine(value: string, max: number): string {
  return value.replace(/[\u0000-\u001F\u007F]/g, " ").replace(/\s+/g, " ").trim().slice(0, max);
}

function cleanIdea(value: string): string {
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .trim()
    .slice(0, 800);
}

export function honeypotTripped(value: unknown): boolean {
  return typeof value === "string" ? value.trim().length > 0 : value != null;
}

export function validateContact(input: unknown): { ok: true; fields: ContactFields } | { ok: false; error: string } {
  if (!input || typeof input !== "object") {
    return { ok: false, error: "Dados inválidos." };
  }

  const record = input as Record<string, unknown>;
  const name = asString(record.name);
  const placement = asString(record.placement);
  const size = asString(record.size);
  const idea = asString(record.idea);

  if (name === null || placement === null || size === null || idea === null) {
    return { ok: false, error: "Dados inválidos." };
  }

  const cleanName = cleanLine(name, 80);
  if (cleanName.length < 2) {
    return { ok: false, error: "Informe seu nome (pelo menos 2 caracteres)." };
  }

  const cleanPlacement = cleanLine(placement, 80);
  const cleanSize = cleanLine(size, 40);
  if (!SIZES.includes(cleanSize as (typeof SIZES)[number])) {
    return { ok: false, error: "Escolha um tamanho válido." };
  }

  return {
    ok: true,
    fields: {
      name: cleanName,
      placement: cleanPlacement,
      size: cleanSize,
      idea: cleanIdea(idea),
    },
  };
}

export function whatsappUrl(fields: ContactFields): string {
  const message = [
    "Olá, Hellen! Quero solicitar um orçamento.",
    `Nome: ${fields.name}`,
    `Local do corpo: ${fields.placement || "não informado"}`,
    `Tamanho: ${fields.size}`,
    `Ideia: ${fields.idea || "não informada"}`,
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export async function verifyRecaptcha(token: string, ip: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret || typeof token !== "string" || token.length < 20 || token.length > 4000) {
    return false;
  }

  const body = new URLSearchParams({
    secret,
    response: token,
    remoteip: ip,
  });

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
    signal: AbortSignal.timeout(8000),
  });

  if (!response.ok) return false;
  const result = (await response.json()) as { success?: boolean; score?: number; action?: string };
  return result.success === true && result.action === "contato" && (result.score ?? 0) >= 0.5;
}

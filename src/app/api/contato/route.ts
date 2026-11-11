import {
  clientIp,
  consumeContactAttempt,
  honeypotTripped,
  validateContact,
  verifyRecaptcha,
  whatsappUrl,
} from "@/lib/contact-guard";

export async function POST(request: Request) {
  const ip = clientIp(request);
  const limit = consumeContactAttempt(ip);
  if (!limit.ok) {
    return Response.json(
      {
        ok: false,
        error: "Muitas tentativas em pouco tempo. O envio deste IP fica bloqueado por 1 hora.",
      },
      {
        status: 429,
        headers: { "Retry-After": String(limit.retryAfter) },
      },
    );
  }

  if (!process.env.RECAPTCHA_SECRET_KEY) {
    return Response.json(
      { ok: false, error: "O formulário está temporariamente indisponível." },
      { status: 503 },
    );
  }

  const raw = await request.text();
  if (raw.length > 8000) {
    return Response.json({ ok: false, error: "Dados inválidos." }, { status: 413 });
  }

  let payload: unknown;
  try {
    payload = JSON.parse(raw) as unknown;
  } catch {
    return Response.json({ ok: false, error: "Dados inválidos." }, { status: 400 });
  }

  if (!payload || typeof payload !== "object") {
    return Response.json({ ok: false, error: "Dados inválidos." }, { status: 400 });
  }

  const record = payload as Record<string, unknown>;
  if (honeypotTripped(record.company)) {
    return Response.json({ ok: true });
  }

  const validated = validateContact(record);
  if (!validated.ok) {
    return Response.json({ ok: false, error: validated.error }, { status: 400 });
  }

  const token = typeof record.recaptchaToken === "string" ? record.recaptchaToken : "";
  let captchaOk = false;
  try {
    captchaOk = await verifyRecaptcha(token, ip);
  } catch {
    captchaOk = false;
  }

  if (!captchaOk) {
    return Response.json(
      { ok: false, error: "Não foi possível confirmar o reCAPTCHA. Tente de novo." },
      { status: 400 },
    );
  }

  return Response.json({ ok: true, url: whatsappUrl(validated.fields) });
}

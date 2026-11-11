"use client";

import Script from "next/script";
import { FormEvent, useState } from "react";

const SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LdagBsuAAAAAJPURT2K4voeyqVC9HfcNtsqNGOS";

type Grecaptcha = {
  ready: (callback: () => void) => void;
  execute: (siteKey: string, options: { action: string }) => Promise<string>;
};

declare global {
  interface Window {
    grecaptcha?: Grecaptcha;
  }
}

export function QuoteForm() {
  const [sent, setSent] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const grecaptcha = window.grecaptcha;

    if (!grecaptcha) {
      setSent(false);
      setError("A verificação de segurança ainda está carregando. Tente de novo em instantes.");
      return;
    }

    setPending(true);
    setError(null);
    setSent(false);

    let token = "";
    try {
      token = await new Promise<string>((resolve, reject) => {
        grecaptcha.ready(() => {
          grecaptcha.execute(SITE_KEY, { action: "contato" }).then(resolve).catch(reject);
        });
      });
    } catch {
      setPending(false);
      setError("Não foi possível confirmar o reCAPTCHA. Tente de novo.");
      return;
    }

    try {
      const response = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          placement: data.get("placement") ?? "",
          size: data.get("size"),
          idea: data.get("idea") ?? "",
          company: data.get("company") ?? "",
          recaptchaToken: token,
        }),
      });
      const body = (await response.json().catch(() => null)) as { ok?: boolean; url?: string; error?: string } | null;

      if (!response.ok || !body?.ok) {
        setError(body?.error || "Não foi possível enviar agora. Tente de novo.");
        return;
      }

      if (body.url?.startsWith("https://wa.me/559185026381?text=")) {
        window.open(body.url, "_blank", "noopener,noreferrer");
        setSent(true);
        form.reset();
      }
    } catch {
      setError("Não foi possível enviar agora. Verifique sua conexão e tente de novo.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="relative space-y-4">
      <Script
        src={`https://www.google.com/recaptcha/api.js?hl=pt-BR&render=${SITE_KEY}`}
        strategy="afterInteractive"
      />
      <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
        <label>
          Empresa
          <input name="company" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>
      <label className="block text-[13px]">
        Seu nome
        <input
          name="name"
          required
          minLength={2}
          maxLength={80}
          placeholder="Como podemos te chamar"
          autoComplete="name"
          className="mt-1 w-full rounded-xl bg-[#181818] px-4 py-3 text-base sm:text-sm"
        />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-[13px]">
          Local do corpo
          <input
            name="placement"
            maxLength={80}
            placeholder="Antebraço, costela..."
            className="mt-1 w-full rounded-xl bg-[#181818] px-4 py-3 text-base sm:text-sm"
          />
        </label>
        <label className="block text-[13px]">
          Tamanho estimado
          <select
            name="size"
            defaultValue="Média (entre 7 e 14 cm)"
            className="mt-1 w-full rounded-xl bg-[#181818] px-4 py-3 text-base sm:text-sm"
          >
            <option>Pequena (até 6 cm)</option>
            <option>Média (entre 7 e 14 cm)</option>
            <option>Grande (acima de 15 cm)</option>
            <option>Projeto complexo</option>
          </select>
        </label>
      </div>
      <label className="block text-[13px]">
        Conte a ideia
        <textarea
          name="idea"
          rows={4}
          maxLength={800}
          placeholder="Símbolos, flores, referências..."
          className="mt-1 w-full rounded-xl bg-[#181818] px-4 py-3 text-base sm:text-sm"
        />
      </label>
      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-[#e5dfd5] py-3.5 text-sm font-semibold text-[#33302a] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Conferindo..." : "Enviar ideia e receber estimativa"}
      </button>
      {error ? (
        <p role="alert" className="rounded-xl bg-[#4a3030] px-4 py-3 text-center text-sm text-[#f0d2d2]">
          {error}
        </p>
      ) : null}
      {sent ? (
        <p role="status" className="rounded-xl bg-[#3b4d42] px-4 py-3 text-center text-sm text-[#d3e8d8]">
          O WhatsApp foi aberto com o seu pedido.
        </p>
      ) : null}
    </form>
  );
}

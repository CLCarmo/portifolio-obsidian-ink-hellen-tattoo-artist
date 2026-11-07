"use client";

import { FormEvent, useState } from "react";

const number = "559185026381";

export function QuoteForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Olá, Hellen! Quero solicitar um orçamento.",
      `Nome: ${data.get("name")}`,
      `Local do corpo: ${data.get("placement") || "não informado"}`,
      `Tamanho: ${data.get("size")}`,
      `Ideia: ${data.get("idea") || "não informada"}`,
    ].join("\n");

    window.open(
      `https://wa.me/${number}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <label className="block text-[13px]">
        Seu nome
        <input
          name="name"
          required
          placeholder="Como podemos te chamar"
          className="mt-1 w-full rounded-xl bg-[#282a29] px-4 py-3 text-sm outline-none"
        />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-[13px]">
          Local do corpo
          <input
            name="placement"
            placeholder="Antebraço, costela..."
            className="mt-1 w-full rounded-xl bg-[#282a29] px-4 py-3 text-sm outline-none"
          />
        </label>
        <label className="block text-[13px]">
          Tamanho estimado
          <select
            name="size"
            defaultValue="Média (entre 7 e 14 cm)"
            className="mt-1 w-full rounded-xl bg-[#282a29] px-4 py-3 text-sm outline-none"
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
          placeholder="Símbolos, flores, referências..."
          className="mt-1 w-full rounded-xl bg-[#282a29] px-4 py-3 text-sm outline-none"
        />
      </label>
      <button
        type="submit"
        className="w-full rounded-full bg-[#e5dfd5] py-3.5 text-sm font-semibold text-[#33302a] transition hover:bg-white"
      >
        Enviar ideia e receber estimativa
      </button>
      {sent ? (
        <p className="rounded-xl bg-[#3b4d42] px-4 py-3 text-center text-sm text-[#d3e8d8]">
          O WhatsApp foi aberto com o seu pedido.
        </p>
      ) : null}
    </form>
  );
}

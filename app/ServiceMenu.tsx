"use client";

import { useState } from "react";
import { ArrowDownRight } from "lucide-react";

const services = [
  {
    id: "banho-de-gel",
    title: "Banho de Gel",
    description: "Ideal para quem deseja fortalecer as unhas naturais.",
    color: "bg-[#8BBEFF]",
    sections: [
      {
        title: "Benefícios",
        description: "",
        details: [
          "Protege contra quebras.",
          "Mantém um aspecto natural.",
          "Ajuda no crescimento saudável das unhas.",
        ],
      },
    ],
  },
  {
    id: "alongamento",
    title: "Alongamento",
    description: "Escolha entre Molde F1 e Gel na Tips para conquistar o comprimento desejado.",
    color: "bg-[#BDEBFF]",
    sections: [
      {
        title: "Alongamento no Molde F1",
        description: "O gel é moldado para criar o comprimento e formato desejados, proporcionando um acabamento fino, resistente e muito natural.",
        details: [
          "Alonga as unhas.",
          "Alta durabilidade.",
          "Acabamento delicado.",
        ],
      },
      {
        title: "Alongamento em Gel na Tips",
        description: "Uma tip é aplicada para criar o comprimento desejado e, em seguida, recebe a estrutura em gel para garantir resistência e um acabamento natural.",
        details: [
          "Ideal para unhas bem curtinhas.",
          "Alongamento imediato.",
          "Muito resistente.",
          "Aparência natural.",
        ],
      },
    ],
  },
];

export default function ServiceMenu() {
  const [openService, setOpenService] = useState<string | null>(null);

  return (
    <div className="mx-auto mt-10 grid max-w-5xl items-start gap-6 md:grid-cols-2">
      {services.map((service) => {
        const isOpen = openService === service.id;
        const panelId = `servico-detalhes-${service.id}`;

        return (
          <article key={service.id} className={`${service.color} group flex min-h-[20rem] flex-col border-2 border-ink p-6 shadow-sticker transition hover:-translate-y-1 hover:shadow-[7px_7px_0_#102A43] sm:p-7`}>
            <div className="flex items-center justify-between">
              <ArrowDownRight size={20} aria-hidden="true" />
            </div>
            <h3 className="mt-9 font-display text-2xl font-extrabold tracking-[-.04em]">{service.title}</h3>
            <p className="mt-3 min-h-[3.25rem] text-sm leading-relaxed text-ink/75">{service.description}</p>
            <p className="mt-4 inline-flex rounded-full border border-ink/30 bg-cream/70 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wide">✳︎ Nail art à parte · opção 3D</p>
            <div className="mt-auto border-t border-ink/25 pt-4">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenService(isOpen ? null : service.id)}
                className="flex w-full cursor-pointer items-center justify-between gap-3 text-left text-[10px] font-extrabold uppercase tracking-widest underline decoration-2 underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-berry"
              >
                <span>{isOpen ? "mostrar menos" : "quero saber mais"}</span>
                <span aria-hidden="true" className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>⌄</span>
              </button>
              <div id={panelId} hidden={!isOpen} className="mt-4 space-y-5">
                {service.sections.map((section) => (
                  <section key={section.title}>
                    <h4 className="font-display text-sm font-extrabold">{section.title}</h4>
                    {section.description && <p className="mt-2 text-sm leading-relaxed text-ink/75">{section.description}</p>}
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink/75">
                      {section.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </section>
                ))}
                <p className="border-t border-ink/20 pt-3 text-sm font-semibold leading-relaxed">A nail art é cobrada à parte. Também há opções de nail art 3D.</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

'use client'

import React from 'react'
import type { IconType } from 'react-icons'
import {
  FiCode,
  FiServer,
  FiDatabase,
  FiTrendingUp,
  FiGitBranch,
  FiCpu,
  FiZap,
} from 'react-icons/fi'

// Componente de seção de serviços para portfólio júnior/em crescimento
// Uso: coloque este arquivo em `components/ServicosSection.tsx` e importe onde quiser.
// Ex: `import ServicosSection from '@/components/ServicosSection'`

interface Service {
  title: string
  description: string
  icon: IconType
}

const services: Service[] = [
  {
    title: 'Desenvolvimento Front‑end',
    description:
      'Interfaces responsivas e dinâmicas com HTML, CSS, JavaScript, React e Next.js, focando em usabilidade e acessibilidade.',
    icon: FiCode,
  },
  {
    title: 'Fundamentos de Back‑end',
    description:
      'APIs com Node.js, Express e NestJS, com atenção à organização do código e boas práticas.',
    icon: FiServer,
  },
  {
    title: 'Banco de Dados',
    description:
      'Modelagem e consultas usando MySQL e PostgreSQL, integração com ORMs como TypeORM.',
    icon: FiDatabase,
  },
  {
    title: 'Performance & SEO',
    description:
      'Otimizações de carregamento, Core Web Vitals, acessibilidade e boas práticas modernas da web.',
    icon: FiTrendingUp,
  },
  {
    title: 'Git & Colaboração',
    description:
      'Fluxos com Git/GitHub, branches, PRs e versionamento claro para trabalho em equipe.',
    icon: FiGitBranch,
  },
  {
    title: 'Aprendizado & IA',
    description:
      'Explorando APIs de IA e automações para agregar valor e acelerar entregas.',
    icon: FiCpu,
  },
]

export default function ServicosSection() {
  return (
    <section
      aria-labelledby="servicos-title"
      className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* Fundo sutil quadriculado */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:32px_32px]"
      />

      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-2 text-sm font-medium tracking-wide text-[#00c951]">
          O que eu ofereço
        </p>
        <h2
          id="servicos-title"
          className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl"
        >
          Construindo experiências digitais que evoluem com você
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-400">
          Criando soluções práticas e modernas usando código, lógica e criatividade.
        </p>
      </div>

      {/* Grid de cartões */}
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((svc) => (
          <article
            key={svc.title}
            className="group relative rounded-2xl border border-slate-800 bg-[#111111] p-6 shadow-[0_0_0_1px_rgba(107,7,19,0.02)] backdrop-blur transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/10 focus-within:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-28 items-center justify-center">
                <svc.icon aria-hidden className="h-8 w-8 b text-red-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-100">
                  {svc.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">
                  {svc.description}
                </p>
              </div>
            </div>

            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-emerald-400/70 to-transparent transition-transform duration-300 group-hover:scale-x-100"
            />
          </article>
        ))}
      </div>
    </section>
  )
}

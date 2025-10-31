'use client'

import Image from 'next/image'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import {
  FiExternalLink,
  FiGithub,
  FiPause,
  FiPlay,
  FiChevronLeft,
  FiChevronRight,
  FiAlertCircle,
} from 'react-icons/fi'

export type Project = {
  id: string
  title: string
  subtitle?: string
  description: string
  client?: string
  duration?: string
  stack: string[]
  /** Public path under /public. Ex: "/projects/sample-1.jpg" */
  image: string
  liveUrl?: string
  repoUrl?: string
}

const PLACEHOLDER_SVG = `data:image/svg+xml;utf8,
  <svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'>
    <rect width='100%' height='100%' fill='rgb(15,23,42)'/>
    <g fill='rgb(100,7,17)' font-family='monospace' font-size='28'>
      <text x='50%' y='48%' dominant-baseline='middle' text-anchor='middle'>Image not found</text>
      <text x='50%' y='58%' dominant-baseline='middle' text-anchor='middle'>/public/projects/*</text>
    </g>
  </svg>`

function sanitizeImagePath(path?: string): string {
  if (!path || typeof path !== 'string') return PLACEHOLDER_SVG
  // next/image exige caminho válido (em /public) quando usando string local
  const isLocal = path.startsWith('/')
  return isLocal ? path : PLACEHOLDER_SVG
}

const PROJECTS: Project[] = [
  {
    id: 'ai-ecommerce',
    title: 'Touch Screening App',
    subtitle: 'App de triagem para unidade de pronto atendimento',
    description:
      'Aplicativo mobile para triagem de pacientes em unidades de saúde, Disponibilizando um fluxo ágil e eficiente para avaliação inicial.',
    client: 'IFPA - Instituto Federal do Pará',
    duration: '6 meses',
    stack: ['Flutter', 'Firabase', 'Figma'],
    image: '/images/TouchScreeing(telasIniciais).png',
    liveUrl: '#',
    repoUrl: 'https://github.com/JucelinoHenrique/touchscreening_fixed',
  },
  {
    id: 'eklem-landing',
    title: 'Eklem Edits Landing Page',
    subtitle: 'Landing page para portfólio de edição de vídeos',
    description:
      'Landing page para apresentação do metodo "O auge" da Eklem Edits',
    client: 'Eklem Edits',
    duration: '2 meses',
    stack: ['Vue.js', 'TypeScript', 'Figma', 'Styled Components'],
    image: '/images/EklemEdits.png',
    liveUrl: 'https://eklemedits-website.vercel.app/',
    repoUrl: 'https://github.com/JucelinoHenrique/eklemedits_website',
  },
]

function validateProjects(data: Project[]) {
  if (!Array.isArray(data) || data.length === 0) {
    console.warn('[ProjectsSection] PROJECTS está vazio — adicione seus projetos.')
  }
  data.forEach((p, idx) => {
    if (!p.title || !p.id) {
      console.warn(`[ProjectsSection] Projeto #${idx} sem id/título.`)
    }
    if (!p.image?.startsWith('/')) {
      console.warn(
        `[ProjectsSection] Projeto "${p.title}" possui caminho de imagem inválido ("${p.image}"). Use algo como /projects/nome.jpg em /public.`,
      )
    }
  })
}

export default function ProjectsSection() {
  const projects = useMemo(() => PROJECTS, [])
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const [imgErrored, setImgErrored] = useState(false)

  
  useEffect(() => {
    validateProjects(projects)
  }, [projects])

  // Auto‑avanço a cada 3s quando não está pausado
  useEffect(() => {
    if (paused || projects.length <= 1) return
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % projects.length)
    }, 3000)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [paused, projects.length])

  // Pausar quando usuário interagir
  const handleUserInteraction = () => setPaused(true)

  const current = projects[index]
  const imgSrc = sanitizeImagePath(current?.image)

  return (
    <section
      aria-labelledby="projects-title"
      className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      onClick={handleUserInteraction}
      onKeyDown={handleUserInteraction}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,rgba(16,185,129,0.15)_1px,transparent_1px)] [background-size:28px_28px]"
      />

      <header className="mb-8">
        <p className="text-sm font-medium text-red-400">• Projetos</p>
        <h2 id="projects-title" className="text-3xl font-bold text-slate-100 sm:text-4xl">
          Projetos Recentes
        </h2>
      </header>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="relative">
          <div className="overflow-hidden rounded-xl border border-emerald-500/20 bg-slate-900/60 shadow-inner">
            <Image
              priority
              key={imgSrc}
              src={imgSrc}
              alt={current?.title ?? 'Project image'}
              width={1200}
              height={800}
              onError={() => setImgErrored(true)}
              className="h-full w-full object-cover transition-opacity duration-500"
            />
          </div>
          {imgErrored || imgSrc === PLACEHOLDER_SVG ? (
            <div className="mt-2 flex items-center gap-2 text-xs text-emerald-300">
              <FiAlertCircle className="h-4 w-4" />
              <span>
                Imagem não encontrada. Coloque um arquivo em <code>/public/projects</code> e
                atualize o caminho em <code>PROJECTS[].image</code> (ex.: <code>/projects/meu-arquivo.jpg</code>).
              </span>
            </div>
          ) : null}
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {projects.map((p, i) => (
                <button
                  key={p.id}
                  aria-label={`Ir para projeto ${i + 1}`}
                  className={`h-2 w-8 rounded-full transition-all ${
                    i === index ? 'bg-emerald-400' : 'bg-slate-600'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation()
                    setIndex(i)
                    setPaused(true)
                  }}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                className="rounded-lg border border-slate-700 p-2 text-emerald-300 hover:bg-slate-800"
                onClick={(e) => {
                  e.stopPropagation()
                  setIndex((i) => (i - 1 + projects.length) % projects.length)
                  setPaused(true)
                }}
                aria-label="Anterior"
              >
                <FiChevronLeft />
              </button>
              <button
                className="rounded-lg border border-slate-700 p-2 text-emerald-300  hover:bg-slate-800"
                onClick={(e) => {
                  e.stopPropagation()
                  setIndex((i) => (i + 1) % projects.length)
                  setPaused(true)
                }}
                aria-label="Próximo"
              >
                <FiChevronRight />
              </button>
              <button
                className="rounded-lg border border-emerald-300 p-2 text-emerald-300 hover:bg-emerald-600/10"
                onClick={(e) => {
                  e.stopPropagation()
                  setPaused((p) => !p)
                }}
                aria-label={paused ? 'Reproduzir' : 'Pausar'}
                title={paused ? 'Reproduzir (retomar auto‑slide)' : 'Pausar'}
              >
                {paused ? <FiPlay /> : <FiPause />}
              </button>
            </div>
          </div>
        </div>
        <article className="rounded-xl border border-slate-500/20 bg-slate-900/60 p-6">
          <h3 className="text-2xl font-semibold text-green-300">{current.title}</h3>
          {current.subtitle && (
            <p className="mt-1 text-lg text-slate-300">{current.subtitle}</p>
          )}
          <p className="mt-3 text-slate-400">{current.description}</p>

          <div className="mt-6">
            <p className="mb-2 text-sm font-semibold tracking-wide text-emerald-400">Informações</p>
            <ul className="divide-y divide-slate-700/70 text-sm text-slate-300">
              <li className="flex items-center justify-between py-2">
                <span className="text-slate-400">Cliente</span>
                <span>{current.client ?? '—'}</span>
              </li>
              <li className="flex items-center justify-between py-2">
                <span className="text-slate-400">Duração</span>
                <span>{current.duration ?? '—'}</span>
              </li>
              <li className="flex items-center justify-between py-2">
                <span className="text-slate-400">Tecnologias</span>
                <span className="max-w-[60%] text-right">
                  {current.stack.join(', ')}
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            {current.liveUrl && (
              <a
                href={current.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-emerald-400 hover:underline"
              >
                <span>Live Demo</span> <FiExternalLink />
              </a>
            )}
            {current.repoUrl && (
              <a
                href={current.repoUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-slate-300 hover:underline"
              >
                <span>Ver no Github</span> <FiGithub />
              </a>
            )}
          </div>
        </article>
      </div>
    </section>
  )
}

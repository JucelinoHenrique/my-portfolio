"use client";
import { useMemo } from "react";
import { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiAmazon,
  SiGraphql,
  SiJest,
  SiGo,
} from "react-icons/si";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";

export type Tech = {
  name: string;
  icon: IconType;
  level?: "beginner" | "intermediate" | "advanced";
  tag?: string; 
};

const coreStack: Tech[] = [
  { name: "Next.js", icon: SiNextdotjs, level: "intermediate", tag: "Core" },
  { name: "TypeScript", icon: SiTypescript, level: "advanced", tag: "Core" },
  { name: "TailwindCSS", icon: SiTailwindcss, level: "intermediate", tag: "Core" },
  { name: "React", icon: SiReact, level: "advanced", tag: "Core" },
];

const frontEnd: Tech[] = [
  { name: "HTML5", icon: FaHtml5, tag: "Front-end" },
  { name: "CSS3", icon: FaCss3Alt, tag: "Front-end" },
];

const backEnd: Tech[] = [
  { name: "Node.js", icon: SiNodedotjs, tag: "Back-end" },
  { name: "Python", icon: SiPython, tag: "Back-end" },
  {name: "GO", icon:SiGo,tag:'Back-end'}
];

const databases: Tech[] = [
  { name: "PostgreSQL", icon: SiPostgresql, tag: "Databases" },
  { name: "MongoDB", icon: SiMongodb, tag: "Databases" },
];

const tools: Tech[] = [
  { name: "Git", icon: SiGit, tag: "Tools" },
  { name: "Docker", icon: SiDocker, tag: "Tools" },
  { name: "AWS", icon: SiAmazon, tag: "Tools" },
  { name: "Jest", icon: SiJest, tag: "Tools" },
  { name: "GraphQL", icon: SiGraphql, tag: "Tools" },
];

const groups: { title: string; items: Tech[] }[] = [
  { title: "Principal Stacks", items: coreStack },
  { title: "Front‑End", items: frontEnd },
  { title: "Back‑End", items: backEnd },
  { title: "Databases", items: databases },
  { title: "Ferramentas & Plataformas", items: tools },
];

function SkillPill({ icon: Icon, name, level }: Tech) {
  return (
    <div
      className="group relative flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
      role="listitem"
      aria-label={name}
    >
      {/* circular icon wrapper, always perfectly round and the same size */}
      <div
        className="size-12 shrink-0 rounded-full bg-gradient-to-br from-white/10 to-white/0 ring-1 ring-inset ring-white/15 grid place-items-center"
        aria-hidden
      >
        <Icon className="size-6" />
      </div>
      <div className="flex min-w-0 flex-col">
        <span className="truncate text-sm font-medium text-white/90">{name}</span>
        {level && (
          <span className="mt-0.5 inline-flex w-fit items-center rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-[10px] tracking-wide text-white/70">
            {level}
          </span>
        )}
      </div>
      {/* hover glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}

export default function TechStackSection() {
  const flat = useMemo(() => groups.flatMap((g) => g.items), []);

  return (
    <section
      id="tech"
      aria-labelledby="tech-title"
      className="relative mx-auto  max-w-7xl px-4 py-20 text-white"
    >
      {/* subtle grid background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(80,200,180,0.18),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.08),transparent_40%)]" />
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <p className="text-red-400/80 text-sm">• Tecnologias</p>
          <h2
            id="tech-title"
            className="bg-gradient-to-r from-red-300 via-white to-white/70 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl"
          >
            Tecnologias & Ferramentas
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-white/70">
            Stack principal: Next.js, TypeScript, Tailwind e React. Abaixo,
            outras tecnologias que uso no dia a dia.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: dense icon grid */}
        <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-sm">
          <h3 className="mb-4 text-sm font-semibold text-red/70">Visão geral</h3>
          <ul
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4"
            role="list"
            aria-label="Grade de tecnologias"
          >
            {flat.map((t) => (
              <li key={`${t.tag}-${t.name}`}>
                <SkillPill {...t} />
              </li>
            ))}
          </ul>
        </div>

        {/* Right: categorized lists */}
        <div className="rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-sm">
          <h3 className="mb-4 text-sm font-semibold text-red/70">Categorias</h3>
          <div className="space-y-5">
            {groups.map((g) => (
              <div key={g.title}>
                <p className="mb-2 text-xs uppercase tracking-wider text-white/50">
                  {g.title}
                </p>
                <ul className="flex flex-wrap gap-2" role="list">
                  {g.items.map(({ name }) => (
                    <li
                      key={name}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                    >
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

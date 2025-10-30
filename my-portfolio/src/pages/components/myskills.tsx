
// app/components/SkillsCarousel.jsx  (ou src/components/SkillsCarousel.tsx)
"use client";

import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs,
  SiTailwindcss, SiMysql, SiPostgresql, SiDocker, SiNestjs, SiGit,
  SiGoland,
  SiGo
} from "react-icons/si";

const skills = [
  { name: "JavaScript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "NestJS", Icon: SiNestjs },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "MySQL", Icon: SiMysql },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Docker", Icon: SiDocker },
  { name: "Git", Icon: SiGit },
  { name: "Golang", Icon: SiGo }
];

export default function MySkills() {
  const loop = [...skills, ...skills];
  return (
    <section className="skills-wrap">
      <h1 className="text-center text-xl md:text-3xl font-bold leading-tight mb-4">SKILLS MODERNAS</h1>
      <div className="rail" aria-label="Skills carousel">
        <ul className="track">
          {loop.map(({ name, Icon }, i) => (
            <li className="item" key={`${name}-${i}`}>
              <span className="icon"><Icon /></span>
              <span className="label">{name}</span>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        :root {
          --bg: #0b0d0f;                 /* fundo escuro */
          --card: #0f1216;               /* “cards” discretos */
          --text: #cdd5df;               /* texto principal */
          --muted: #6b7280;              /* texto secundário */
          --accent: #b44848ff;             /* TEAL da sua paleta */
        }

        .skills-wrap {
          background: #111111 ;
          margin-top: 20px;
          padding: 28px 0;
          border-radius: 16px;
        }

        /* faixa do carrossel */
        .rail {
          overflow: hidden;
          position: relative;
          padding: 12px 0;
          /* máscara nas laterais para dar o fade igual aos exemplos */
          -webkit-mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
          mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
        }

        /* trilho animado */
        .track {
          display: flex;
          gap: 28px;
          width: max-content;           /* necessário para a animação contínua */
          animation: scroll 22s linear infinite;
        }
        /* pausa no hover (opcional) */
        .rail:hover .track { animation-play-state: paused; }

        @keyframes scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); } /* metade pois duplicamos a lista */
        }

        .item {
          display: grid;
          place-items: center;
          width: 160px;
          height: 120px;
          background: var(--card);
          border: 1px solid rgba(179, 56, 66, 0.25); /* borda TEAL sutil */
          border-radius: 16px;
          box-shadow: 0 0 0 1px rgba(255,255,255,0.02) inset;
          transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
        }
        .item:hover {
          transform: translateY(-4px);
          border-color: var(--accent);
          box-shadow: 0 6px 20px rgba(72,180,163,.18);
        }

        .icon :global(svg) {
          width: 42px;
          height: 42px;
          display: block;
          margin-bottom: 10px;
          color: var(--accent);
          filter: drop-shadow(0 0 10px rgba(185, 63, 89, 0.25));
        }

        .label {
          font: 500 14px/1.1 ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Inter, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji";
          color: var(--text);
          opacity: .9;
          letter-spacing: .2px;
        }

        /* responsivo */
        @media (max-width: 640px) {
          .item { width: 128px; height: 104px; }
          .icon :global(svg) { width: 36px; height: 36px; }
          .track { gap: 20px; }
        }

        /* acessibilidade – respeita redução de movimento */
        @media (prefers-reduced-motion: reduce) {
          .track { animation: none; }
        }
      `}</style>
    </section>
  );
}

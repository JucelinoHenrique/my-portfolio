import { FaGithub, FaLinkedin } from "react-icons/fa";
import React, { useEffect, useRef, useState, useId } from "react";

type Props = {
  text: string;
  speed?: number; // ms por caractere
  onDone?: () => void;
};

function TypeWriter({ text, speed = 40, onDone }: Props) {
  const [out, setOut] = useState("");
  const iRef = useRef(0);
  const timerRef = useRef<number | null>(null);

  // Converte em array de "caracteres" seguros (emoji/acentos)
  const chars = useRef<string[]>([]);
  useEffect(() => {
    chars.current = [...(text ?? "")]; // espalhar lida code points corretamente
  }, [text]);

  useEffect(() => {
    // reset
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setOut("");
    iRef.current = 0;

    const tick = () => {
      const i = iRef.current;
      if (i >= chars.current.length) {
        if (onDone) onDone();
        return;
      }
      // Gera o substring diretamente pelo índice atual
      setOut(chars.current.slice(0, i + 1).join(""));
      iRef.current = i + 1;
      timerRef.current = window.setTimeout(tick, Math.max(0, speed));
    };

    tick();

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [text, speed, onDone]);

  return <span>{out}</span>;
}

export default function Hero() {
  const _id = useId();
  const clipId = `clip-${_id}`;
  // build a rounded pentagon path dynamically so corners are smooth
  const pentagonPath = (() => {
    const cx = 100;
    const cy = 100;
    const radius = 90;
    const cornerRadius = 12;
    const t = cornerRadius / radius; // fraction along each edge to start/end the corner

    const pts = Array.from({ length: 5 }).map((_, i) => {
      const ang = ((-90 + i * 72) * Math.PI) / 180;
      return { x: cx + radius * Math.cos(ang), y: cy + radius * Math.sin(ang) };
    });

    const starts = pts.map((p, i) => {
      const prev = pts[(i + pts.length - 1) % pts.length];
      return { x: p.x + (prev.x - p.x) * t, y: p.y + (prev.y - p.y) * t };
    });

    const ends = pts.map((p, i) => {
      const next = pts[(i + 1) % pts.length];
      return { x: p.x + (next.x - p.x) * t, y: p.y + (next.y - p.y) * t };
    });

    let d = `M ${starts[0].x} ${starts[0].y}`;
    for (let i = 0; i < pts.length; i++) {
      d += ` Q ${pts[i].x} ${pts[i].y} ${ends[i].x} ${ends[i].y}`;
      const next = (i + 1) % pts.length;
      d += ` L ${starts[next].x} ${starts[next].y}`;
    }
    d += " Z";
    return d;
  })();

  return (
    <section className="bg-[#111111] text-white min-h-[520px] flex items-center mt-7 py-20 px-6">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="flex justify-center md:justify-start">
          <div className="relative">
            <div className="relative flex-none w-[420px] h-[420px] overflow-hidden">
              <svg
                className="w-full h-full shadow-2xl block"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
                role="img"
              >
                <defs>
                  <clipPath id={clipId} clipPathUnits="userSpaceOnUse">
                    <path d={pentagonPath} />
                  </clipPath>
                </defs>
                <image
                  href="/images/Profissional.png"
                  x="0"
                  y="0"
                  width="200"
                  height="200"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath={`url(#${clipId})`}
                />
              </svg>
              {/* badge */}
            </div>
          </div>
        </div>

        <div className="text-left">
          <p className="text-sm text-pink-400 mb-2 font-medium tracking-wide">
            &lt;span&gt; Hey, I&apos;m Jucelino &lt;/span&gt;
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            <span className="block font-mono text-green-400">
              {"{"}
              <TypeWriter text="Full Stack" />
              {" }"}{" "}
              <span className="text-slate-300">Web &amp; App Developer</span>
              <span className="animate-cursor">_</span>
            </span>
          </h1>

          <p className="text-slate-400 max-w-xl mb-6">
            Com experiência em tecnologias modernas como React, Next.js, Node.js 
            Golang e flutter. Construo aplicações rápidas, acessíveis e bem
            estruturadas.
          </p>

          <div className="flex gap-4">
            <a
              href="#contact"
              className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
            >
              Tem um projeto?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

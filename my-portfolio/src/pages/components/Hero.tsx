import { FaGithub, FaLinkedin } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";

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

  return (
    <section className="bg-[#111111] text-white min-h-[520px] flex items-center mt-7 py-20 px-6 border-gradient">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center ">
        <div className="flex justify-center md:justify-start ">
          <div className="relative">
            <div className="relative flex-none w-[420px] h-[420px] overflow-hidden rounded-2xl shadow-2xl">
              <img src="/images/Profissional.png" alt="Jucelino" className="w-full h-full object-cover" />
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

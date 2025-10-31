'use client';

import Link from 'next/link';
import { useState } from 'react';
import { IconType } from 'react-icons';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import ContactModal from './ProjectButton/ContactModal';

type Social = {
  label: string;
  href: string;
  Icon: IconType;
};

const socials: Social[] = [
  { label: 'Instagram', href: 'https://www.instagram.com/juce.17', Icon: FaInstagram },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jucelino-oliveira-4109a9229/', Icon: FaLinkedin },
  { label: 'Github', href: 'https://github.com/JucelinoHenrique', Icon: FaGithub }
];

const nav = [
  { label: 'About Me', href: '#about' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contacts', href: '#contact' },
];

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <footer className="w-full border-t border-white/5 bg-[#0f0f0f]">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-neutral-300">
        {/* Marca */}
        <div className="flex items-center justify-center gap-3">
          <h1 className="text-xl font-bold tracking-tight text-white flex items-center">
            <span className={'text-[#62040e] text-2xl'}>&lt;</span>
            Jucelino<span className="text-white">.Dev</span>
            <span className={'text-[#62040e] text-2xl'}>/&gt;</span>
          </h1>
        </div>

        {/* Socials (ícones 40x40, redondos e simétricos) */}
        <div className="mt-6 flex items-center justify-center gap-4">
          {socials.map(({ href, label, Icon }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-full ring-1 ring-white/10 transition
                         hover:ring-brandGreen/60 focus:outline-none focus:ring-2 focus:ring-brandGreen/80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="h-5 w-5 text-neutral-200 transition group-hover:scale-110" />
            </Link>
          ))}
        </div>

        {/* Navegação */}
        <nav className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          <button
            type="button"

            className="inline-flex items-center justify-center rounded-lg bg-[#6b0713] px-5 py-2.5 text-white text-sm font-medium shadow-sm
         hover:bg-[#6b0713]/90 hover:shadow-md
         focus:outline-none focus:ring-4 focus:ring-[#6b0713]/30
         active:translate-y-px transition"
          >
            <a href="/Currículo_Jucelino_Henrique.pdf" target="_blank" rel="noopener noreferrer" >Baixar Currículo</a>      
          </button>

          <button
             onClick={() => setIsOpen(true) }
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-[#6b0713] px-5 py-2.5 text-white text-sm font-medium
         hover:bg-[#6b0713]/10
         focus:outline-none focus:ring-4 focus:ring-[#6b0713]/20
         active:translate-y-px transition"
          >
            Entrar em contato
          </button>
        </nav>
      </div>
      <ContactModal isOpen={isOpen} onClose={()=> setIsOpen(false)}/>
    </footer>
  );
}

'use client';

import Link from 'next/link';
import { IconType } from 'react-icons';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

type Social = {
  label: string;
  href: string;
  Icon: IconType;
};

const socials: Social[] = [
  { label: 'Instagram',   href: 'https://www.instagram.com/juce.17', Icon: FaInstagram },
  { label: 'LinkedIn',    href: 'https://www.linkedin.com/in/jucelino-oliveira-4109a9229/', Icon: FaLinkedin },
  { label: 'Github',    href: 'https://github.com/JucelinoHenrique', Icon: FaGithub }
];

const nav = [
  { label: 'About Me', href: '#about' },
  { label: 'Resume',   href: '/resume' },
  { label: 'Contacts', href: '#contact' },
];

export default function Footer() {
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
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-neutral-300 transition hover:text-brandGreen focus:outline-none focus:ring-2 focus:ring-brandGreen/70 rounded"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}

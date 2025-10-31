import { useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import ContactModal from './ProjectButton/ContactModal';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const ACCENT_COLOR = "text-[#62040e]";
  const HOVER_COLOR = "hover:text-[#62040e]";

  return (
    <header className="w-full px-6 py-8 top-5 z-50">
      <div className="max-w-6xl mx-auto">
        <div className="header-bar">
          <div className="header-bar-content flex items-center justify-between">
            <h1 className="text-xl font-bold tracking-tight text-white flex items-center">
              <span className={`${ACCENT_COLOR} text-2xl`}>&lt;</span>
              Jucelino<span className="text-white">.Dev</span>
              <span className={`${ACCENT_COLOR} text-2xl`}>/&gt;</span>
            </h1>

            <nav className="hidden sm:flex space-x-6 text-sm font-medium absolute left-1/2 transform -translate-x-1/2">
              <a href="#about" className={`text-slate-300 ${HOVER_COLOR} transition-colors`}>
                Sobre
              </a>
              <a href="#projects"  className={`text-slate-300 ${HOVER_COLOR} transition-colors`}>
                Projetos
              </a>
              <a href="/Currículo_Jucelino_Henrique.pdf" target="_blank" rel="noopener noreferrer" className={`text-slate-300 ${HOVER_COLOR} transition-colors`}>
                Currículo
              </a>
              <a href="#contact" onClick={() => setIsOpen(true)}  className={`text-slate-300 ${HOVER_COLOR} transition-colors`}>
                Contato
              </a>
            </nav>
            
            <div className="flex items-center gap-4 text-slate-300">
              <a href="https://www.instagram.com/juce.17" target="_blank" rel="noopener noreferrer" className={`${HOVER_COLOR} transition-colors`}>
                <FaInstagram size={20} />
              </a>
              <a href="https://github.com/JucelinoHenrique" target="_blank" rel="noopener noreferrer" className={`${HOVER_COLOR} transition-colors`}>
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/jucelino-oliveira-4109a9229/" target="_blank" rel="noopener noreferrer" className={`${HOVER_COLOR} transition-colors`}>
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <ContactModal isOpen={isOpen} onClose={()=> setIsOpen(false)}/>
    </header>
  )
}

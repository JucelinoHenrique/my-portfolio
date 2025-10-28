import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Header() {
  const ACCENT_COLOR = "text-[#15503c]";
  const HOVER_COLOR = "hover:text-[#15503c]";

  return (
    <header className="w-full px-6 py-4 sticky top-4 z-50">
      <div className="max-w-6xl mx-auto">
        <div className="header-bar flex items-center justify-between px-6 py-3">
          <h1 className={`text-xl font-bold tracking-tight text-white flex items-center`}>
            <span className={`${ACCENT_COLOR} text-2xl`}>&lt;</span>
            Jucelino<span className="text-white">.Dev</span>
            <span className={`${ACCENT_COLOR} text-2xl`}>/&gt;</span>
          </h1>
          <nav className="space-x-6 text-sm font-medium hidden sm:flex grow justify-center">
            <a href="#about" className={`text-slate-300 ${HOVER_COLOR} transition-colors`}>
              Sobre
            </a>
            <a href="#projects" className={`text-slate-300 ${HOVER_COLOR} transition-colors`}>
              Projetos
            </a>
            <a href="/Currículo_Jucelino_Henrique.pdf" target="_blank" download className={`text-slate-300 ${HOVER_COLOR} transition-colors`}>
              Currículo
            </a>
            <a href="#contact" className={`text-slate-300 ${HOVER_COLOR} transition-colors`}>
              Contato
            </a>
          </nav>
          
          <div className="flex items-center gap-4 text-slate-300 text-lg">
            <a href="https://www.instagram.com/juce.17" target="_blank" rel="noopener noreferrer" className={HOVER_COLOR}>
                <FaInstagram />
            </a>
            <a href="https://github.com/JucelinoHenrique" target="_blank" rel="noopener noreferrer" className={HOVER_COLOR}>
                <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/jucelino-oliveira-4109a9229/" target="_blank" rel="noopener noreferrer" className={HOVER_COLOR}>
                <FaLinkedin />
            </a>
          </div>
        </div>
    </div>
      </header>
  )
}
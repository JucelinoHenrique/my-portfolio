export default function Header() {
  return (
    <header className="w-full px-6 py-4 bg-[#0f172a] shadow-md sticky top-0 z-50 border-b border-[#1e293b]">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-lg font-semibold tracking-tight">Jucelino Oliveira</h1>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#about" className="hover:text-purple-500 transition-colors">Sobre</a>
          <a href="#projects" className="hover:text-purple-500 transition-colors">Projetos</a>
          <a href="#contact" className="hover:text-purple-500 transition-colors">Contato</a>
        </nav>
      </div>
    </header>
  )
}
export default function Header() {
  return (
    <header className="w-full px-6 py-4 bg-[#0f172a] shadow-md sticky top-0 z-50 border-b border-[#1e293b]">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-lg font-semibold tracking-tight">Jucelino Oliveira</h1>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#about" className="hover:text-pink-500 transition-colors">About</a>
          <a href="#projects" className="hover:text-pink-500 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-pink-500 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  )
}


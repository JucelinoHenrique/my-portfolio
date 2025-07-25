import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="flex flex-col-reverse sm:flex-row items-center justify-between text-left py-20 px-6 max-w-6xl mx-auto">
      <div className="sm:w-1/2 text-center sm:text-left">
        <p className="text-pink-500 text-sm uppercase font-medium tracking-wide mb-2">Hello.</p>
        <h2 className="text-4xl sm:text-5xl font-bold mb-3">I'm Jucelino</h2>
        <h3 className="text-xl sm:text-2xl text-slate-400 font-medium mb-6">Full Stack Developer</h3>

        <div className="flex gap-4 justify-center sm:justify-start mb-6">
          <a
            href="#contact"
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-5 py-2 rounded shadow-md transition-colors"
          >
            Got a project?
          </a>
          <a
            href="/curriculo.pdf"
            className="border border-slate-500 text-white font-semibold px-5 py-2 rounded hover:bg-slate-800 transition-colors"
            download
          >
            My resume
          </a>
        </div>

        <div className="flex gap-4 justify-center sm:justify-start">
          <a href="https://github.com/JucelinoHenrique" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} className="hover:text-pink-500 transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/jucelino-oliveira-4109a9229/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} className="hover:text-pink-500 transition-colors" />
          </a>
        </div>
      </div>

      <div className="sm:w-1/2 flex justify-center mb-10 sm:mb-0">
        <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-pink-500 shadow-lg">
          <img
            src="/profile.jpg"
            alt="Jucelino Oliveira"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
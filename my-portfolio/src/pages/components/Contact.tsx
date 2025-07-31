// components/Contact.tsx
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6 text-purple-500">Contato</h2>
      <p className="text-slate-300 mb-10 text-lg leading-relaxed max-w-2xl mx-auto">
        Se deseja entrar em contato comigo, utilize os canais abaixo. Estou disponível para oportunidades, colaborações e novos projetos. 🚀
      </p>

      {/* Informações de contato diretas */}
      <div className="space-y-6 text-slate-300 text-lg">
        <p className="flex items-center justify-center gap-3">
          <FaEnvelope className="text-purple-500" />
          <a href="mailto:seuemail@gmail.com" className="hover:text-purple-400 transition">
            jucelino.oliveira2002@gmail.com
          </a>
        </p>
        <p className="flex items-center justify-center gap-3">
          <FaPhone className="text-purple-500" />
          <a href="tel:+5594992979826" className="hover:text-purple-400 transition">
            +55 (94) 992979826
          </a>
        </p>
      </div>

      {/* Links sociais */}
      <div className="flex justify-center gap-8 mt-10 text-3xl text-slate-400">
        <a href="https://github.com/JucelinoHenrique" target="_blank" className="hover:text-purple-500">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/jucelino-oliveira-4109a9229/" target="_blank" className="hover:text-purple-500">
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}

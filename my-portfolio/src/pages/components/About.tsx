// components/About.tsx
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-purple-500 mb-12">
        Sobre mim
      </h2>

      <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto text-center mb-12">
        Sou um desenvolvedor <span className="text-purple-400 font-semibold">Full Stack</span> em formação, apaixonado por tecnologia e por transformar ideias em soluções digitais. 
        Minha jornada começou na graduação em <span className="text-purple-400">Ciência da Computação</span>, onde participei de projetos acadêmicos impactantes, 
        e se fortaleceu com experiências profissionais em empresas de tecnologia e projetos freelancers.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-[#1e293b] p-8 rounded-xl shadow hover:shadow-purple-500/10 transition">
          <h3 className="flex items-center gap-2 text-xl font-semibold text-purple-400 mb-4">
            <FaGraduationCap /> Formação Acadêmica
          </h3>
          <p className="text-slate-300 text-base leading-relaxed mb-3">
            🎓 IFPA - Bacharelado em <strong>Ciência da Computação</strong> (em andamento).  
          </p>
          <p className="text-slate-300 text-base leading-relaxed">
            📱 <strong>Projeto TouchScreening</strong> – Aplicativo acadêmico em Flutter + Firebase para triagem de pacientes em unidades de saúde, 
            com telas de cadastro, anamnese e relatórios finais. Projeto voltado a impacto social e inovação em saúde.
          </p>
        </div>

        <div className="bg-[#1e293b] p-8 rounded-xl shadow hover:shadow-purple-500/10 transition">
          <h3 className="flex items-center gap-2 text-xl font-semibold text-purple-400 mb-4">
            <FaBriefcase /> Experiência Profissional
          </h3>
          <p className="text-slate-300 text-base leading-relaxed mb-3">
            💼 <strong>Compass UOL</strong> – Estagiário e Trainee Full Stack.  
            Atuação em times ágeis, utilizando <span className="text-purple-400">React, TypeScript, Node.js, Docker, SQL e AWS</span>, com contribuições em projetos da Livelo.
          </p>
          <p className="text-slate-300 text-base leading-relaxed mb-3">
            🖥️ <strong>CompuServe LTDA</strong> – Suporte Técnico (Dez/2022 – Fev/2024).<br />
            Atendimento ao cliente e manutenção de sistemas comerciais, resolução de problemas em produção e automação de rotinas
            com <span className="text-purple-400">SQL e Python</span>.
          </p>
          <p className="text-slate-300 text-base leading-relaxed">
            🌐 <strong>Freelancer – Eklem Edits Website</strong> – Desenvolvimento de site landpage para a empresa Eklem Edits, 
            utilizando <span className="text-purple-400">Nuxt 3, Vuetify e Vercel</span>, com foco em performance e design moderno.
          </p>
        </div>
      </div>
    </section>
  );
}

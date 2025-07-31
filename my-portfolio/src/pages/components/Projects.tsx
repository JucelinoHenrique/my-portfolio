import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { useState } from 'react'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const [openModal, setOpenModal] = useState(false);

  const projects = [
    {
      name: 'TouchScreening',
      description:
        'Aplicativo para triagem de pacientes desenvolvido com Flutter e Firebase, voltado para unidades de saúde.',
      tech: ['Flutter', 'Firebase'],
      github: 'https://github.com/JucelinoHenrique/touchscreening_fixed',
      modal: true,
    },
    {
      name: 'Challenge-XII Backend',
      description:
        'API backend construída com Nest.js e TypeScript, integrando com um front-end React e seguindo padrão MVC.',
      tech: ['Nest.js', 'TypeScript', 'React'],
      github:
        'https://github.com/JucelinoHenrique/Challenge-XII-back---Jucelino-henrique-',
    },
    {
      name: 'Eklem Edits Website',
      description:
        'Pagina de vendas da empresa Eklem Edits, desenvolvido com Nuxt 3 e Vuetify, hospedado na Vercel.',
      tech: ["Nuxt 3", "Vuetify", "Sass", "Vercel"],
      github:"https://github.com/JucelinoHenrique/eklemedits_website",
      live: 'https://eklemedits-website.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="py-16 px-6 max-w-[80%] mx-auto">
      <h2 className="text-2xl font-bold mb-10 text-center">Projetos em Destaque</h2>
      <div className="grid gap-10 md:grid-cols-3">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-[#1e293b] p-6 rounded-xl border border-transparent hover:border-purple-500 transition duration-300 shadow-lg hover:shadow-purple-500/10"
          >
            <h3 className="text-2xl font-bold text-purple-500 mb-2">{project.name}</h3>
            <p className="text-slate-300 mb-4 text-sm leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((stack, i) => (
                <span
                  key={i}
                  className="bg-purple-500 text-white px-3 py-1 text-xs rounded-full font-medium shadow"
                >
                  {stack}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-purple-400 hover:underline"
                >
                  <FaGithub /> GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-purple-400 hover:underline"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              )}
              {project.modal && (
                <button
                  onClick={() => setOpenModal(true)}
                  className="inline-flex items-center gap-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded"
                >
                  Ver mais
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <ProjectModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </section>
  );
}

import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDocker
} from 'react-icons/fa'
import {
  SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb, SiMysql, SiFirebase,
  SiDjango, SiFlutter, SiStyledcomponents, SiPostman, SiPython
} from 'react-icons/si'

const categories = [
  {
    title: 'Linguagens',
    items: [
      { name: 'HTML5', icon: FaHtml5 },
      { name: 'CSS3', icon: FaCss3Alt },
      { name: 'JavaScript', icon: FaJs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Python', icon: SiPython }
    ]
  },
  {
    title: 'Frameworks - Front-end',
    items: [
      { name: 'React', icon: FaReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Styled Components', icon: SiStyledcomponents }
    ]
  },
  {
    title: 'Frameworks - Back-end',
    items: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Nest.js', icon: FaNodeJs },
      { name: 'Django', icon: SiDjango }
    ]
  },
  {
    title: 'Bancos de Dados',
    items: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Firebase', icon: SiFirebase }
    ]
  },
  {
    title: 'Ferramentas e Versionamento',
    items: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGithub },
      { name: 'Postman', icon: SiPostman },
      { name: 'Docker', icon: FaDocker }
    ]
  },
  {
    title: 'Mobile',
    items: [
      { name: 'Flutter', icon: SiFlutter }
    ]
  }
]

export default function TechStack() {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">Ferramentas & Tecnologias</h2>
      <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
        Aqui estão as principais tecnologias e ferramentas que utilizo para construir aplicações modernas, performáticas e bem estruturadas.
      </p>
      <div className="grid gap-10 md:grid-cols-2">
        {categories.map((group, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold text-purple-500 mb-4">{group.title}</h3>
            <div className="flex flex-wrap justify-center gap-6 text-slate-400">
              {group.items.map(({ name, icon: Icon }, i) => (
                <div key={i} className="flex flex-col items-center w-20 hover:text-purple-500 transition-colors">
                  <Icon size={32} />
                  <span className="text-sm mt-2">{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
import { FaFlask, FaGraduationCap } from "react-icons/fa"
import TimeLineCard from "./TimelineCard/timeLineCard"

export default function About() {
  return (
    <main className="min-h-screen bg-[#161616] flex justify-center py-16 px-4">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="bg-[#111111] p-6 rounded-2xl shadow-lg border border-teal-800">
          <div className="flex items-center gap-2 mb-4">
            <FaGraduationCap className="text-green-400 text-xl" />
            <h2 className="text-lg font-bold text-gray-100">Educação</h2>
          </div>

          <div className="flex flex-col gap-6">
            <TimeLineCard
              year="2023–2027"
              title="IFPA - Instituto Federal do Pará"
              institution="Bacharelado em Ciência da Computação"
              description=""
            />
            <TimeLineCard
              year="2025"
              title="XVII SICTI - Seminário de Iniciação Científica"
              institution="1° Lugar em trabalhos acadêmicos"
              description="Apresentação do aplicativo 'TouchScreening' uma solução tecnológica para triagem de pacientes em unidades de saúde."
            />
            <TimeLineCard
              year="2017–2021"
              title="IFPA - Instituto Federal do Pará"
              institution="Ensino Médio Integrado em Edificações"
              description=""
            />
          </div>
        </section>
        <section className="bg-[#111111] p-6 rounded-2xl shadow-lg border border-teal-800">
          <div className="flex items-center gap-2 mb-4">
            <FaFlask className="text-green-400 text-xl" />
            <h2 className="text-lg font-bold text-gray-100">Pesquisa e Certificações</h2>
          </div>

          <div className="flex flex-col gap-6">
            <TimeLineCard
              year="Jul/2024- Dez/2024"
              title="PIBIC - Programa Institucional de Bolsas de Iniciação Científica"
              institution="IFPA - Instituto Federal do Pará"
              description="TOUCH SCREENING: APLICAÇÃO MOBILE
                            DE SUPORTE À TRIAGEM NA UPA DE TUCURUÍ"
            />
            <TimeLineCard
              year="Jul/2025"
              title="Certificate 53/100 (B2 Upper Intermediate)"
              institution="EF SET English "
              description="Certificado de proficiência em inglês. Leitura, escrita, compreensão auditiva e expressão oral."
            />
            <TimeLineCard
              year="Nov/2022"
              title="Algoritmos e logica de programação"
              institution="DevMedia"
              description="Algoritmo e logica de programação com python"
            />
          </div>
        </section>
      </div>
    </main>
  )
}
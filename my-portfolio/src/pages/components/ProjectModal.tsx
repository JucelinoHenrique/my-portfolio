// components/ProjectModal.tsx
import { useState } from "react";
import { FaHome, FaClipboardList, FaCheckCircle, FaChalkboardTeacher } from "react-icons/fa";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ProjectModal({ isOpen, onClose }: Props) {
  const [tab, setTab] = useState("iniciais");

  if (!isOpen) return null;

  const sections = {
    iniciais: {
      title: "Telas Iniciais",
      desc: "Essa é a tela de Cadastro e Login do aplicativo. Permite que o usuário crie sua conta ou se autentique rapidamente usando sua conta Google.",
      images: ["/images/TouchScreeing(telasIniciais).png"],
      icon: <FaHome />,
    },
    anamnese: {
      title: "Telas de Anamnese",
      desc: "Aqui o usuário responde perguntas relacionadas ao seu estado de saúde, auxiliando na coleta de informações médicas importantes para a triagem.",
      images: ["/images/TouchScreeing(anamnese).png"],
      icon: <FaClipboardList />,
    },
    finais: {
      title: "Telas Finais",
      desc: "Tela que apresenta o resumo das informações preenchidas e confirma o envio dos dados para a equipe médica responsável.",
      images: ["/images/TouchScreeing(final).png"],
      icon: <FaCheckCircle />,
    },
    apresentacao: {
      title: "Apresentação",
      desc: "Imagem utilizada na apresentação acadêmica do projeto, destacando seu impacto social e objetivo de facilitar o atendimento em unidades de saúde.",
      images: ["/images/Apresentação.jpg"],
      icon: <FaChalkboardTeacher />,
    },
  };

  const current = sections[tab as keyof typeof sections];

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-[#1e293b] p-6 rounded-lg w-11/12 md:w-3/4 lg:w-2/3 relative shadow-2xl">
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-slate-400 hover:text-white text-xl"
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold text-pink-500 mb-2 text-center">
          TouchScreening
        </h2>
        <p className="text-slate-300 mb-6 text-center max-w-2xl mx-auto text-base">
          Aplicativo desenvolvido em Flutter e Firebase para auxiliar na triagem
          e anamnese em unidades de saúde.
        </p>

        <div className="flex gap-3 mb-6 flex-wrap justify-center">
          {Object.keys(sections).map((key) => (
            <button
              key={key}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition transform hover:scale-105 shadow-md
                ${tab === key ? "bg-pink-500 text-white" : "bg-slate-700 text-slate-300 hover:bg-slate-600"}`}
              onClick={() => setTab(key)}
            >
              {sections[key as keyof typeof sections].icon}
              {sections[key as keyof typeof sections].title}
            </button>
          ))}
        </div>

        <div className="flex flex-col items-center text-center space-y-4 animate-fadeIn">
          <h3 className="text-xl font-semibold text-pink-400">
            {current.title}
          </h3>
            <p className="bg-slate-800/50 p-4 rounded text-slate-200 text-base leading-relaxed max-w-xl">
            {current.desc}
          </p>
          {current.images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={current.title}
              className="w-full max-h-[400px] object-contain rounded-lg "
            />
          ))}
        
        </div>
      </div>
    </div>
  );
}

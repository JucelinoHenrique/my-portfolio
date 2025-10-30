import {ReactNode} from 'react';

interface props{
    year:string;
    title:string;
    institution: string;
    description: ReactNode;
}

export default function TimeLineCard({year, title, institution, description}:props){
     return (
    <div className="relative pl-6 border-l border-gray-700">
      <div className="absolute -left-[7px] top-1 w-3 h-3 bg-green-400 rounded-full"></div>
      <p className="text-sm text-gray-500">{year}</p>
      <h3 className="text-white-500 font-semibold">{title}</h3>
      <p className="text-gray-400">{institution}</p>
      <p className="mt-1 text-gray-500 text-sm">{description}</p>
    </div>
  );
}


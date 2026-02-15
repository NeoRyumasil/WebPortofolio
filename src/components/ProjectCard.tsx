import Image from "next/image";

interface ProjectCardProps {
    title: string;
    imageSrc: string;
    desc: string;
    link: string;
    stack: string[];
    category?: "web" | "ai" | "eo" | "game";
}

export default function ProjectCard({ title, imageSrc, desc, link, stack, category }: ProjectCardProps) {
    return (
        <div className="group relative w-[500px] bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl hover:translate-y-1">

            {/* Image */}
            <div className="relative w-full h-[180px] overflow-hidden bg-gray-100">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            
            {/* Content */}
            <div className="p-5 flex flex-col min-h-[300px]">
                
                {/* Header */}
                <div className="flex justify-between items-start mb-2">
                    {category && (
                        <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400">
                            {category}
                        </span>
                    )}

                    {/* Tech Stack */}
                    <div className="text-[11px] font-mono text-[#1B2631] font-semibold">
                        {stack.join(" | ")}
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#1B2631] mb-2 group-hover:underline decoration-2 underline-offset-4">
                    {title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-6 line-clamp-7">
                    {desc}
                </p>    

                {/* Link */}
                <div className="mt-auto">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full px-4 py-2 bg-black text-white text-sm font-bold rounded-lg transition-all duration-300 hover:bg-[#1B2631] group-hover:gap-2">
                        View Project
                        <svg 
                            className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-all"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}
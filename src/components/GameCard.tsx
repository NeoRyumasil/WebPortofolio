import Image from "next/image";

// interface for GameCard props
interface GameCardProps {
    title: string;
    imageSrc: string;
    link: string;
}

export default function GameCard({ title, imageSrc, link }: GameCardProps) {
    return (
        <div className="relative w-[250px] h-[150px] rounded-xl overflow-hidden shadow-lg group">

            {/* Game Image */}
            <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-white text-lg font-bold mb-2 text-center px-2">
                    {title}
                </h4>

                <a
                    href={link}
                    target="_blank"
                    className="px-4 py-2 bg-black text-white border-2 border-white rounded font-bold hover:bg-[#3F4E4F] transition-colors"
                >
                    Try Game
                </a>
            </div>
        </div>
    )
}
import { gamePortfolioData } from "@/data/content";
import GameCard from "@/components/GameCard";

export default function Games() {
    return (
        <main className="w-full min-h-screen bg-[#F0F4F8]">

            {/* Title Section */}
            <section className="bg-[#1B2631] text-white py-16 px-6 shadow-md">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wider mb-4">
                        Game Portofolio
                    </h1>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Kumpulan proyek pengembangan game yang pernah saya kerjakan.
                    </p>
                </div>
            </section>

            {/* Project Section */}
            <section className="max-w-7xl mx-auto py-16 px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-x-8 gap-y-12">

                    {gamePortfolioData.map((game, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <GameCard
                                title={game.title}
                                imageSrc={game.imageSrc}
                                link={game.link}
                            />
                        </div>
                    ))}

                    {gamePortfolioData.length == 0 && (
                        <div>
                            <p>Projek Belum Ditambahkan</p>
                        </div>
                    )}

                </div>
            </section>

        </main>
    );
}
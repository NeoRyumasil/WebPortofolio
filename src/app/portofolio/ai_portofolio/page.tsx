import { aiPortofolioData } from "@/data/content";
import ProjectCard from "@/components/ProjectCard";

export default function ArtificialIntelligence() {
    return (
        <main className="w-full min-h-screen bg-[#F0F4F8]">

            {/* Title Section */}
            <section className="bg-[#1B2631] text-white py-16 px-6 shadow-md">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wider mb-4">
                        Artificial Intelligence Portofolio
                    </h1>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Kumpulan proyek machine learning, deep learning, hingga generative AI yang pernah saya kerjakan.
                    </p>
                </div>
            </section>

            {/* Project Section */}
            <section className="max-w-7xl mx-auto py-16 px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-x-8 gap-y-12">

                    {aiPortofolioData.map((ai, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <ProjectCard
                                key={index}
                                title={ai.title}
                                imageSrc={ai.imageSrc}
                                desc={ai.desc}
                                link={ai.link}
                                stack={ai.stack}
                                category="ai"
                            />
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
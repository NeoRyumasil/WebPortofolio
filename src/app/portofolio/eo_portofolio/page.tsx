import { eoPortofolioData } from "@/data/content";
import ProjectCard from "@/components/ProjectCard";

export default function EventOrganizer() {
    return (
        <main className="w-full min-h-screen bg-[#F0F4F8]">

            {/* Title Section */}
            <section className="bg-[#1B2631] text-white py-16 px-6 shadow-md">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wider mb-4">
                        Event Organizer Portofolio
                    </h1>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Kumpulan acara yang saya pernah menjadi bagian di dalamnya.
                    </p>
                </div>
            </section>

            {/* Project Section */}
            <section className="max-w-7xl mx-auto py-16 px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-x-8 gap-y-12">

                    {eoPortofolioData.map((eo, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <ProjectCard
                                key={index}
                                title={eo.title}
                                imageSrc={eo.imageSrc}
                                desc={eo.desc}
                                link={eo.link}
                                stack={eo.stack}
                                category="eo"
                            />
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
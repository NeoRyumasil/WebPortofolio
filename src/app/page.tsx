import HeroSection from "@/components/HeroSection";
import GameCard from "@/components/GameCard";
import { educationData, organizationData, gamePortfolioData, achievementsData, experienceData, footerData } from "@/data/content";

// Judul
const SectionTitle = ({ icon, title }: { icon: string; title: string }) => (
  <h3 className="flex items-center text-2xl font-bold mb-5 mt-10 text-[#1B2631]">
    <span className="mr-2">{icon}</span> {title}
  </h3>
)

// Info Card
const InfoCard = ({children}: {children: React.ReactNode}) => (
  <div className="bg-[#D9E4E0] p-4 rounded-lg mb-4 shadow-sm text-justify">
    {children}
  </div>
)

// Home Page
export default function Home() {
  return (
    <div className="min-h-screen py-10 px-4">
      <main className="max-w-4xl mx-auto bg-[#F0F4F8] shadow-2xl rounded-xl overflow-hidden">

        {/* Hero Section */}
        <div className="p-6 md:p-10">
          <HeroSection />

          {/* Education Section */}
          <SectionTitle icon="🎓" title="Pendidikan" />
          {educationData.map((edu, index) => (
            <InfoCard key={index}>
              <h4 className="font-bold text-lg">{edu.title}</h4>
              <p className="text-sm text-gray-700">{edu.institution}</p>
              <p className="text-xs font-medium">{edu.year}</p>
            </InfoCard>
          ))}

          {/* Experience Section */}
          <SectionTitle icon="💼" title="Pengalaman" />
          {experienceData.map((exp, index) => (
            <InfoCard key={index}>
              <ul className="list-disc ml-5">
                <li className="font-bold text-lg">{exp.role}, {exp.place}</li>
              </ul>
              <p className="text-sm italic mb-2 mt-1">{exp.duration}</p>
              <p className="text-gray-800">{exp.desc}</p>
            </InfoCard>
          ))}

          {/* Organization Section */}
          <SectionTitle icon="🤝" title="Organisasi" />
          {organizationData.map((org, index) => (
            <InfoCard key={index}>
              <ul className="list-disc ml-5">
                <li className="font-bold text-lg">{org.role}, {org.organization}</li>
              </ul>
              <p className="text-sm italic mb-2 mt-1">{org.duration}</p>
              <p className="text-gray-800">{org.desc}</p>
            </InfoCard>
          ))}

          {/* Game Portfolio Section */}
          <SectionTitle icon="🎮" title="Portofolio Game" />
          <div className="bg-[#D9E4E0] p-6 rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
            {gamePortfolioData.map((game, index) => (
              <GameCard key={index} {...game} />
            ))}
          </div>

          {/* Achievements Section */}
          <SectionTitle icon="🏆" title="Prestasi" />
          <InfoCard>
            <ul className="list-disc ml-5 space-y-2">
              {achievementsData.map((acv, index) => (
                <li key={index}>{acv}</li>
              ))}
            </ul>
          </InfoCard>
        </div>
        
        
        {/* Footer */}
        <footer className="bg-[#1B2631] text-[#F0F4F8] text-center p-8 mt-10">
          <p className="text-xl font-bold mb-4">Muhammad Alvin Ababil</p>
          <div className="flex justify-center space-x-6 text-3xl">
            <a href={footerData[0].linkedinLink} target="_blank" className="hover:text-blue-500 transition-colors"><i className="bx bxl-linkedin-square"></i></a>
            <a href={footerData[0].githubLink} target="_blank" className="hover:text-gray-400 transition-colors"><i className="bx bxl-github"></i></a>
            <a href={footerData[0].youtubeLink} target="_blank" className="hover:text-red-500 transition-colors"><i className="bx bxl-youtube"></i></a>
          </div>
        </footer>

      </main>
    </div>
  );
}

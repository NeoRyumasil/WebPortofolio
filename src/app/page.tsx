import NavBar from "@/components/NavBar";
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

        {/* Navigation Bar */}
        <NavBar />

        {/* Hero Section */}
        <HeroSection />

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-6 pb-20">

          {/* Education Section */}
          <SectionTitle icon="🎓" title="Pendidikan" />
          <div className="space-y-4">
            {educationData.map((edu, index) => (
            <InfoCard key={index}>
              <h4 className="font-bold text-lg text-[#1B2631]">{edu.title}</h4>
              <p className="text-sm text-gray-700">{edu.institution}</p>
              <p className="text-xs font-medium text-gray-600">{edu.year}</p>
            </InfoCard>
          ))}
          </div>

          {/* Experience Section */}
          <SectionTitle icon="💼" title="Pengalaman" />
          {experienceData.map((exp, index) => (
            <InfoCard key={index}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <h4 className="font-bold text-lg text-[#1B2631] max-w-xl">{exp.role}, {exp.place}</h4>
                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">{exp.duration}</span>
              </div>
              <p className="text-gray-800">{exp.desc}</p>
            </InfoCard>
          ))}

          {/* Organization Section */}
          <SectionTitle icon="👥" title="Organisasi" />
          {organizationData.map((org, index) => (
            <InfoCard key={index}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <h4 className="font-bold text-lg text-[#1B2631] max-w-2xl">{org.role}, {org.organization}</h4>
                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">{org.duration}</span>
              </div>
              <p className="text-gray-700 leading-relaxed">{org.desc}</p>
            </InfoCard>
          ))}

          {/* Game Portfolio Section */}
          <SectionTitle icon="🎮" title="Portofolio Game" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {gamePortfolioData.map((game, index) => (
              <GameCard key={index} {...game} />
            ))}
          </div>

          {/* Achievements Section */}
          <SectionTitle icon="🏆" title="Prestasi" />
          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#1B2641]">
            <ul className="list-disc ml-5 space-y-2">
              {achievementsData.map((acv, index) => (
                <li key={index} className="text-gray-800">
                  {acv}
                </li>
              ))}
            </ul>
          </div>
        </main>
        
        {/* Footer */}
        <footer className="bg-[#1B2631] text-[#F0F4F8] text-center p-10">
          <p className="text-2xl font-bold mb-2 tracking-wider uppercase">Muhammad Alvin Ababil</p>
          <div className="flex justify-center space-x-8 text-3xl">
            <a href={footerData[0].linkedinLink} target="_blank" className="hover:text-blue-500 transition-colors"><i className="bx bxl-linkedin-square"></i></a>
            <a href={footerData[0].githubLink} target="_blank" className="hover:text-gray-400 transition-colors"><i className="bx bxl-github"></i></a>
            <a href={footerData[0].youtubeLink} target="_blank" className="hover:text-red-500 transition-colors"><i className="bx bxl-youtube"></i></a>
          </div>
        </footer>
    </div>
  );
}

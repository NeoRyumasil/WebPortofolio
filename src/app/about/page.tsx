import HeroSection from "@/components/HeroSection";
import { experienceData, organizationData, educationData, achievementsData } from "@/data/content";


export default function About() {

  // Judul
  const SectionTitle = ({ icon, title }: { icon: string; title: string }) => (
    <div className="flex items-center gap-3 mb-8 mt-16">
      <span className="text-3xl">{icon}</span>
      <h3 className="text-2xl font-extrabold text-[#1B2631] tracking-tight">
        {title}
      </h3>
      <div className="flex-1 h-0.5 bg-gray-200 ml-4 rounded-full"/>
    </div> 
  );

  // Info Card
  const InfoCard = ({children}: {children: React.ReactNode}) => (
    <div className="group relative pl-8 pb-10 border-l-2 border-gray-200 last:border-0 last:pb-0 ml-4">
      
      {/* Timeline */}
      <div className="absolute -left-2.5 top-1 w-4 h-4 rounded-full bg-white border-4 border-[#1B2631] group-hover:scale-125 transition-transform" />
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all duration-300 text-justify max-w-3xl">
        {children}
      </div>
    </div>
  )

  return (
      <div className="min-h-screen py-10 px-4">
      
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
      </div>
    );
}
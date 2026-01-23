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
              <div className="flex justify-between items-start gap-4 mb-3">
                <div className="flex-1">
                  <h4 className=" font-bold text-lg md:text-base text-[#1B2631] leading-tight">
                    {edu.title}
                  </h4>
                  <p className="text-base md:text-sm text-[#1B2631] font-bold mb-2">
                    {edu.institution}
                  </p>
                </div>
                  <span className="shrink-0 text-[10px] md:text-[12px] font-bold uppercase tracking-tight text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100 shadow-sm">
                    {edu.year}
                  </span>
              </div>
            </InfoCard>
          ))}
          </div>
      
          {/* Experience Section */}
          <SectionTitle icon="💼" title="Pengalaman" />
          {experienceData.map((exp, index) => (
            <InfoCard key={index}>
              <div className="flex justify-between items-start gap-4 mb-3">
                <div className="flex-1">
                  <h4 className=" font-bold text-lg md:text-base text-[#1B2631] leading-tight">
                    {exp.role}
                  </h4>
                  <p className="text-base md:text-sm text-[#1B2631] font-bold mb-2">
                    {exp.place}
                  </p>
                </div>
                  <span className="shrink-0 text-[10px] md:text-[12px] font-bold uppercase tracking-tight text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100 shadow-sm">
                    {exp.duration}
                  </span>
              </div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                 {exp.desc}
              </p>
            </InfoCard>
          ))}
      
          {/* Organization Section */}
          <SectionTitle icon="👥" title="Organisasi" />
          {organizationData.map((org, index) => (
           <InfoCard key={index}>
              <div className="flex justify-between items-start gap-4 mb-3">
                <div className="flex-1">
                  <h4 className=" font-bold text-lg md:text-base text-[#1B2631] leading-tight">
                    {org.role}
                  </h4>
                  <p className="text-base md:text-sm text-[#1B2631] font-bold mb-2">
                    {org.organization}
                  </p>
                </div>
                  <span className="shrink-0 text-[10px] md:text-[12px] font-bold uppercase tracking-tight text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100 shadow-sm">
                    {org.duration}
                  </span>
              </div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                 {org.desc}
              </p>
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
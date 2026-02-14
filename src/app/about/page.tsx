'use client';

import HeroSection from "@/components/HeroSection";
import { experienceData, organizationData, educationData, achievementsData, expertiseData } from "@/data/content";
import { Gamepad, DatabaseIcon, Calendar1Icon, CpuIcon, ServerIcon } from "lucide-react";
import { useState } from "react";


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

  // Expertise Card
  const ExpertiseCard = () => {
    const [activeTab, setActiveTab] = useState(expertiseData[0]);

    const iconMap = (iconName: string) => {
      switch (iconName) {
        case "gamedev": return <Gamepad size={20} />;
        case "webdev": return <DatabaseIcon size={20} />;
        case "aidev": return <CpuIcon size={20} />;
        case "eventorg": return <Calendar1Icon size={20} />;
        default: return <ServerIcon size={20} />;
      }
  };

  return (
    <div className="mt-8 mb-16">
      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden min-h-[400px]">

        {/* Tab Buttons */}
        <div className="w-full md:w-64 bg-gray-50 flex flex-row md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-r border-gray-100 scrollbar-hide">
          {expertiseData.map((expertise) => (
            <button
              key={expertise.id}
              onClick={() => setActiveTab(expertise)}
              className= {`
                flex items-center gap-3 px-6 py-4 text-sm font-bold transition-all whitespace-nowrap md:whitespace-normal text-left
                ${activeTab.id === expertise.id 
                  ? "bg-white text-[#1B2631] border-b-2 md:border-b-0 md:border-l-4 border-[#1B2631] shadow-sm md:shadow-none"  
                  : "text-gray-500 hover:bg-gray-100 hover:text-[#1B2631]" 
                }
              `}
              >
                <span className={`${activeTab.id === expertise.id ? "text-[#1B2631]" : "text-gray-400"} `}>
                  {iconMap(expertise.icon)}
                </span>
                {expertise.title}
              </button>
          ))}
        </div>
        
        {/* Content Area */}
        <div className="flex-1 p-6 md:p-10 bg-white flex flex-col justify-center">
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300" key={activeTab.id}>
            {/* Header */}
            <div className="flex items-center gap-3  mb-6">
              <div className="p-3 bg-[#1B2631] text-white rounded-lg shadow-md">
                {iconMap(activeTab.icon)}
              </div>
              <h3 className="text-2xl font-extrabold text=[#1B2631] uppercase tracking-tight">
                {activeTab.title}
              </h3>
            </div>

          {/* Description */}
          <blockquote className="text-lg text-gray-600 italic leading-relaxed border-l-4 border-gray-200 pl-4 mb-8">
            {activeTab.desc}
          </blockquote>
          
          {/* Stack */}
          <div>
            <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
              Tech Stack
            </h5>
            <div className="flex flex-wrap gap-3">
              {activeTab.stack.map((tech, index) => (
                <span key={index} className="px-3 py-1.5 text-xs font-bold text-[#1B2631] bg-gray-100 rounded border border-gray-200 hover:bg-[#1B2631] hover:text-white transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>      
        </div>
      </div>
    </div>
  );
};

  return (
      <div className="min-h-screen py-10 px-4">
      
        {/* Hero Section */}
        <HeroSection />
      
        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-6 pb-20">

          {/* Expertise Section */}
          <SectionTitle icon="🔧" title="Keahlian" />
          <ExpertiseCard />

          {/* Education Section */}
          <SectionTitle icon="🎓" title="Pendidikan" />
          <div className="space-y-4">
            {educationData.map((edu, index) => (
            <InfoCard key={index}>
              <div className="flex justify-between items-start gap-4 mb-3">
                <div className="flex-1">
                  <h4 className=" font-bold text-base md:text-lg text-[#1B2631] leading-tight">
                    {edu.title}
                  </h4>
                  <p className="text-sm md:text-base text-[#1B2631] font-bold mb-2">
                    {edu.institution}
                  </p>
                </div>
                  <span className="shrink-0 text-[9px] md:text-[12px] font-bold uppercase tracking-tight text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100 shadow-sm">
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
                  <h4 className=" font-bold text-lg md:text-xl text-[#1B2631] leading-tight">
                    {exp.role}
                  </h4>
                  <p className="text-base md:text-lg text-[#1B2631] font-bold mb-2">
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
                  <h4 className=" font-bold text-lg md:text-xl text-[#1B2631] leading-tight">
                    {org.role}
                  </h4>
                  <p className="text-base md:text-lg text-[#1B2631] font-bold mb-2">
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
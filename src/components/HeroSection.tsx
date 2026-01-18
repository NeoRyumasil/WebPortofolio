'use client';

import Image from "next/image";
import { profileData } from "@/data/content";

export default function HeroSection() {
    return (
        
        <section className="bg-[#F0F4F8] w-full min-h-[80vh] flex items-center justify-between gap-10 md:gap-16">

            {/* Main Container */}
            <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">

                {/* Text Container */}
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#1B2631] font-black mb-6 uppercase tracking-tight leading-tight">
                        Halo, Saya <br/>
                        <span>
                            {profileData.name}
                        </span>
                    </h1>

                    <p className="text-base text-justify md:text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl md:max-w-xl lg:max-w-2xl">
                        {profileData.desc}
                    </p>

                    <button
                        onClick={() => window.open(profileData.cvLink, "_blank")}
                        className="bg-[#3F4E4F] text-white px-8 py-3 rounded-md font-bold hover:bg-[#1B2631] transition-all duration-300 shadow-lg transform hover:-translate-y-1 md:pb-3 lg:pb-3"
                    >
                        Get My CV
                    </button>
                </div>

                {/* Image Container */}
                <div className="flex-1 flex justify-center md:justify-end relative w-full">

                    {/* Profile Image */}
                    <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]">
                        <Image
                            src={profileData.imageSrc}
                            alt="Profile Image"
                            fill
                            priority
                            className="object-cover rounded-3xl shadow-2xl border-4 border-white relative z-10"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

'use client';

import { profileData } from "@/data/content";

export default function HeroSection() {
    return (
        <div className="flex flex-col items-center justify-center text-center py-20 md:py-32 bg-[#F0F4F8] px-4">

            {/* Header Section */}
            <h1 className="text-4xl md:text-6xl text-[#1B2631] font-black mb-6 uppercase tracking-tight">
                Halo, Saya {profileData.name}
            </h1>

            {/* Subtitle Section */}
            <p className="text-lg md:text-xl text-gray-600 max-w-5xl leading-relaxed mb-10">
                {profileData.desc}
            </p>

            {/* Download CV Button */}
            <button
                onClick={() => window.open(profileData.cvLink, "_blank")}
                className="bg-[#3F4E4F] text-white px-6 py-3 rounded-md font-medium hover:bg-[#1B2631] transition-colors duration-300"
            >
                Get My CV
            </button>
        </div>
    )
}

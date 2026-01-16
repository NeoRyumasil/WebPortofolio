'use client';

import Image from "next/image";
import { profileData } from "@/data/content";

export default function HeroSection() {
    return (
        <div>
            {/* Header Section */}
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl text-[#1B2631] font-bold m-0">
                    Muhammad Alvin Ababil
                </h1>

                {/* Download CV Button */}
                <button
                    onClick={() => window.open(profileData.cvLink, "_blank")}
                    className="bg-[#3F4E4F] text-white px-6 py-3 rounded-md font-medium hover:bg-[#1B2631] transition-colors duration-300"
                >
                    Get My CV
                </button>
            </div>

            {/* Profile Section */}
            <div className="flex justify-center mt-8 mb-5">
                <div className="relative h-[150px] w-[150px] rounded-full overflow-hidden border-4 border-[#3F4E4F]">
                    <Image
                        src={profileData.imageSrc}
                        alt="Foto Profil"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            <h2 className="text-3xl text-[#1B2631] font-bold mb-2 text-center">
                Halo, Saya {profileData.name}!
            </h2>
            <p className="text-lg text-[#1B2631] text-justify">
                {profileData.desc}
            </p>
        </div>
    )
}

'use client';

import { useState } from "react";
import Image from "next/image";
import { profileData } from "@/data/content";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white sticky top-0 z-50 shadow-sm">
            
            {/* Main Container */}
            <div className="flex justify-between items-center py-6 px-6 md:px-12">
                
                {/* Photo Section */}
                <div className="flex items-center gap-4">
                    <div className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden border border-gray-200 shadow-sm shrink-0">
                        <Image
                            src={profileData.imageSrc}
                            alt="Profile Photo"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Name Section */}
                <span className="font-bold text-lg tracking-wider text-[#1B2631] uppercase">
                    {profileData.name}
                </span>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 text-sm font-bold text-gray-600 tracking-wider">
                    <li className="hover:text-[#1B2631] cursor-pointer transition-colors">HOME</li>
                    <li className="hover:text-[#1B2631] cursor-pointer transition-colors">PENDIDIKAN</li>
                    <li className="hover:text-[#1B2631] cursor-pointer transition-colors">PORTFOLIO</li>
                    <li className="hover:text-[#1B2631] cursor-pointer transition-colors">CONTACT</li>
                </ul>

                {/* Hamburger Icon*/}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-3xl text-[#1B2631] focus:outline-none">
                        <i className={`bx ${isOpen ? 'bx-x' : 'bx-menu'}`}></i>
                    </button>
                </div>
            </div>

            {/* Mobile Menu*/}
            <div className={`md:hidden bg-white border-t transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-64' : 'max-h-0'}`}>
                <ul className="flex flex-col text-right px-6 py-4 gap-4 text-sm font-bold text-gray-600 tracking-wider">
                    <li className="hover:text-[#1B2631] cursor-pointer" onClick={() => setIsOpen(false)}>HOME</li>
                    <li className="hover:text-[#1B2631] cursor-pointer" onClick={() => setIsOpen(false)}>PENDIDIKAN</li>
                    <li className="hover:text-[#1B2631] cursor-pointer" onClick={() => setIsOpen(false)}>PORTFOLIO</li>
                    <li className="hover:text-[#1B2631] cursor-pointer" onClick={() => setIsOpen(false)}>CONTACT</li>
                </ul>
            </div>
        </nav>
    );
}
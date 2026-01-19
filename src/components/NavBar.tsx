'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { profileData } from "@/data/content";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);

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
                    <li>
                        <Link href="/" className="hover:text-[#1B2631] transition-colors">HOME</Link>
                    </li>

                    <li>
                        <Link href="/about" className="hover:text-[#1B2631] transition-colors">ABOUT</Link>
                    </li>
                    
                    {/* Portofolio */}
                    <li className="relative group">
                        <span className="hover:text-[#1B2631] cursor-pointer transition-colors pb-2">
                            PORTFOLIO   
                        </span>

                        {/* Dropdown Menu */}
                        <ul className="absolute left-0 mt-2 w-max bg-white shadow-xl rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
                            <li>
                                 <Link href='/portofolio/game_portofolio' className=" block px-6 py-4 hover:bg-gray-100 hover:text-[#1B2631]">GAMES</Link>
                            </li>
                            <li>
                                <Link href='/portofolio/web_portofolio' className=" block px-6 py-4 hover:bg-gray-100 hover:text-[#1B2631]">WEBSITES</Link>
                            </li>
                            <li>
                                <Link href='/portofolio/ai_portofolio' className=" block px-6 py-4 hover:bg-gray-100 hover:text-[#1B2631]">AI</Link>
                            </li>
                            <li>
                                <Link href='/portofolio/eo_portofolio' className=" block px-6 py-4 hover:bg-gray-100 hover:text-[#1B2631]">EO</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-[#1B2631] transition-colors">CONTACT</Link>
                    </li>
                </ul>

                {/* Hamburger Icon*/}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-3xl text-[#1B2631] focus:outline-none">
                        <i className={`bx ${isOpen ? 'bx-x' : 'bx-menu'}`}></i>
                    </button>
                </div>
            </div>

           {/* Mobile Menu */}
            <div className={`md:hidden bg-white border-t transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[1000px]' : 'max-h-0'}`}>
                <ul className="flex flex-col text-left px-8 py-6 gap-2 text-lg font-medium text-gray-700">
                    <li>
                        <Link href="/" className="block py-2 hover:text-[#1B2631]" onClick={() => setIsOpen(false)}>Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="block py-2 hover:text-[#1B2631]" onClick={() => setIsOpen(false)}>About</Link>
                    </li>

                    {/* Portfolio Dropdown Section */}
                    <li className="flex flex-col items-start">
                        <button
                            onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
                            className="flex items-center gap-2 py-2 hover:text-[#1B2631] focus:outline-none"
                        >
                            Portfolio 
                            <i className={`bx ${isPortfolioOpen ? 'bx-caret-up' : 'bx-caret-down'} text-sm`}></i>
                        </button>

                        {/* Sub-menu */}
                        <div className={`w-full overflow-hidden transition-all duration-300 ${isPortfolioOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <ul className="flex flex-col gap-4 pl-6 py-2">
                                <li>
                                    <Link href='/portofolio/game_portofolio' className="text-base text-gray-600 hover:text-[#1B2631]" onClick={() => setIsOpen(false)}>Games</Link>
                                </li>
                                <li>
                                    <Link href='/portofolio/web_portofolio' className="text-base text-gray-600 hover:text-[#1B2631]" onClick={() => setIsOpen(false)}>WEBSITES</Link>
                                </li>
                                <li>
                                    <Link href='/portofolio/ai_portofolio' className="text-base text-gray-600 hover:text-[#1B2631]" onClick={() => setIsOpen(false)}>AI</Link>
                                </li>
                                <li>
                                    <Link href='/portofolio/eo_portofolio' className="text-base text-gray-600 hover:text-[#1B2631]" onClick={() => setIsOpen(false)}>EO</Link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <Link href="/contact" className="block py-2 hover:text-[#1B2631]" onClick={() => setIsOpen(false)}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
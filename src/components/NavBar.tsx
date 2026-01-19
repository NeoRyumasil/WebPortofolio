'use client';

import { useState } from "react";
import Link from "next/link";
import { profileData } from "@/data/content";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);

    return (
        <nav className="bg-white sticky top-0 z-50 shadow-sm">
            
            {/* Main Container */}
            <div className="flex justify-between items-center py-6 px-6 md:px-12">

                {/* Name Section */}
                <span className="font-bold text-lg tracking-wider text-[#1B2631] uppercase">
                    {profileData.name}
                </span>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 text-sm font-bold text-gray-600 tracking-wider">
                    <li>
                        <Link href="/" className="hover:text-[#1B2631] transition-colors">Home</Link>
                    </li>

                    <li>
                        <Link href="/about" className="hover:text-[#1B2631] transition-colors">About</Link>
                    </li>
                    
                    {/* Portofolio */}
                    <li className="relative group">
                        <span className="hover:text-[#1B2631] cursor-pointer transition-colors pb-2">
                            Portofolio   
                        </span>

                        {/* Dropdown Menu - Desktop */}
                        <ul className="absolute left-1/2 -translate-x-1/2 mt-2 w-64 bg-white shadow-xl rounded-md py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100 flex flex-col items-center">
                            <li className="w-full">
                                <Link href='/portofolio/game_portofolio' className="block px-6 py-3 hover:bg-gray-100 hover:text-[#1B2631] text-center whitespace-nowrap">Games</Link>
                            </li>
                            <li className="w-full">
                                <Link href='/portofolio/web_portofolio' className="block px-6 py-3 hover:bg-gray-100 hover:text-[#1B2631] text-center whitespace-nowrap">Websites</Link>
                            </li>
                            <li className="w-full">
                                <Link href='/portofolio/ai_portofolio' className="block px-6 py-3 hover:bg-gray-100 hover:text-[#1B2631] text-center whitespace-nowrap">Artficial Intelligences</Link>
                            </li>
                            <li className="w-full">
                                <Link href='/portofolio/eo_portofolio' className="block px-6 py-3 hover:bg-gray-100 hover:text-[#1B2631] text-center whitespace-nowrap">Event Organizer</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-[#1B2631] transition-colors">Contact</Link>
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
            <div className={`md:hidden bg-white border-t transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-250' : 'max-h-0'}`}>
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
                                    <Link href='/portofolio/web_portofolio' className="text-base text-gray-600 hover:text-[#1B2631]" onClick={() => setIsOpen(false)}>Websites</Link>
                                </li>
                                <li>
                                    <Link href='/portofolio/ai_portofolio' className="text-base text-gray-600 hover:text-[#1B2631]" onClick={() => setIsOpen(false)}>Artificial Intelligences</Link>
                                </li>
                                <li>
                                    <Link href='/portofolio/eo_portofolio' className="text-base text-gray-600 hover:text-[#1B2631]" onClick={() => setIsOpen(false)}>Event Organizer</Link>
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
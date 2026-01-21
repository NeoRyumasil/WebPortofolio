'use client';

import { useState } from "react";
import { portoSliderData } from "@/data/content";
import Link from "next/link";
import Image from "next/image";

export default function PortoSlider(){
    const [current, setCurrent] = useState(0);
    const length = portoSliderData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const previousSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(portoSliderData) || portoSliderData.length <= 0){
        return null;
    }

    return (
        <section className="relative w-full h-[85vh] flex items-center justify-center bg-[#F0F4F8] overflow-hidden">
            
            {/* Previous Button */}
            <button
                onClick={previousSlide}
                className="absolute left-4 md:left-10 z-20 text-[#1B2631] hover:text-gray-500 transition-colors cursor-pointer p-2"
            >
                <i className="bx bx-chevron-left text-6xl md:text-8xl"></i>
            </button>

            {/* Next Button */}
            <button
                onClick={nextSlide}
                className="absolute right-4 md:right-10 z-20 text-[#1B26631] hover:text-gray-500 transition-colors cursor-pointer p-2"
            >
                <i className="bx bx-chevron-right text-6xl md:text-8xl"></i>
            </button>

            {/* Slider */}
            {portoSliderData.map((slide, index) => {
                return (
                    <div
                        key={index}
                        className={`absolute w-full h-full transition-opacity duration-700 ease-in-out flex items-center justify-center
                        ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >

                        {/* Main Card */}
                        {index === current && (
                            <div className="relative w-full max-w-5xl mx-4 md:mx-auto text-center px-6 py-12 md:py-20 bg-white/50 backdrop-blur-sm rounded-3xl shadow-xl border border-white/60">
                                <div className="flex flex-col items-center justify-center gap-6">

                                    {/* Text */}
                                    <h1 className="text-4xl md:text-6xl font-black text-[#1B2631] uppercase tracking-tighter leading-tight">
                                        {slide.title} <br/>
                                    </h1>
                                    <p className="text-gray-600 text-base md:text-xl max-w-2xl leading-relaxed">
                                        {slide.desc}
                                    </p>

                                    {/* Button */}
                                    <div className="flex gap-4 mt-4">
                                        <Link
                                            href={slide.link}
                                            className="px-8 py-3 bg-[#1B2631] text-white font-bold rounded-lg hover:bg-gray-700 transition-all shadow-lg transform hover:translate-y-1"
                                        >
                                            Lihat Portofolio
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}

            {/* Indicator */}
            <div className="absolute bottom-10 flex gap-3 z-20">
                {portoSliderData.map((dot, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`cursor-pointer w-4 h-4 rounded-full transition-all duration-300
                        ${index === current ? 'bg-[#1B2631] w-8' : 'bg-gray-400 hover:bg-gray-600'}`}
                    >
                    </div>
                ))}
            </div>
        </section>
    );
}
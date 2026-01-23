'use client';

import { profileData, contactData } from "@/data/content";

export default function Contact() {
    return (
        <main className="min-h-screen bg-[#F0F4F8] flex flex-col">
            
            {/* Contact Section */}
            <section className="grow flex items-center justify-center px-6 py-20">
                <div className="max-w-4xl w-full text-center">

                    {/* Title */}
                    <div className="mb-12 mt-5">
                        <h1 className="text-4xl md:text-5xl font-black text-[#1B2631] mb-6 uppercase tracking-tight">
                            Kontak Saya
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Lagi cari partner buat project atau sekadar mau tanya-tanya? Langsung hubungi saya saja ya!
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 px-2 md:px-4 mt-10">

                        {/* Email */}
                        <a
                            href={`mailto:${contactData[0].email || 'alvin.ababil2601@gmail.com'}`}
                            className="group bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center gap-4 cursor-pointer py-10"
                        >
                            <div className="w-20 h-20 bg-[#F0F4F8] rounded-full flex items-center justify-center group-hover:bg-[#1B2631] transition-colors duration-300">
                                <i className="bx bx-envelope text-4xl text-[#1B2631] group-hover:text-white transition-colors duration-300"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#1B2631] mb-1">
                                    Email
                                </h3>
                                <p className="text-gray-500 group-hover:text-[#1B2631] transition-colors">
                                    {contactData[0].email || 'alvin.ababil2601@gmail.com'}
                                </p>
                            </div>
                        </a>

                        {/* CV */}
                        <div
                            onClick={() => window.open(profileData.cvLink, "_blank")}
                            className="group bg-white p-8 rounded-3xl shadow-sm border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center gap-4 cursor-pointer py-10"
                        >
                            <div className="w-20 h-20 bg-[#F0F4F8] rounded-full flex items-center justify-center group-hover:bg-[#1B2631] transition-colors duration-300">
                                <i className="bx bx-file text-4xl text-[#1B2631] group-hover:text-white transition-colors duration-300"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#1B2631] mb-1">
                                    CV / Resume
                                </h3>
                                <p className="text-gray-500 group-hover:text-[#1B2631] transition-colors duration-300">
                                    Unduh CV 
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="group bg-white p-8 rounded-3xl shadow-sm border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center gap-4 cursor-pointer py-10 mt-10 mb-10">
                        <div className="pt-10 max-w-2xl mx-auto">
                            <p className=" text-xl text-[#1B2631] font-bold uppercase tracking-[0.2em] mb-8">
                                Media Sosial
                            </p>

                            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-5xl space-x-5 md:space-x-3">

                                {/* Linkedin */}
                                <a
                                    href={contactData[0].linkedin} target="_blank"
                                    className="text-[#1B2631] hover:text-[#0077B5] hover:scale-125 transition-all duration-300"  
                                >
                                    <i className="bx bxl-linkedin-square"></i>
                                </a>

                                {/* GitHub */}
                                <a
                                    href={contactData[0].github} target="_blank"
                                    className="text-[#1B2631] hover:text-gray-600 hover:scale-125 transition-all duration-300"
                                >
                                    <i className="bx bxl-github"></i>
                                </a>

                                {/* Instagram */}
                                <a
                                    href={contactData[0].instagram} target="_blank"
                                    className="text-[#1B2631] hover:text-[#F77737] hover:scale-125 transition-all duration-300"
                                >
                                    <i className="bx bxl-instagram"></i>
                                </a>

                                {/* Facebook */}
                                <a
                                    href={contactData[0].facebook} target="_blank"
                                    className="text-[#1B2631] hover:text-[#1877F2] hover:scale-125 transition-all duration-300"
                                >
                                    <i className="bx bxl-facebook-square"></i>
                                </a>

                                {/* X */}
                                <a
                                    href={contactData[0].x} target="_blank"
                                    className="text-[#1B2631] hover:text-[#1DA1F2] hover:scale-125 transition-all duration-300"
                                >
                                    <i className="bx bxl-twitter"></i>
                                </a>

                                {/* Youtube */}
                                <a
                                    href={contactData[0].youtube} target="_blank"
                                    className="text-[#1B2631] hover:text-[#FF0000] hover:scale-125 transition-all duration-300"
                                >
                                    <i className="bx bxl-youtube"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
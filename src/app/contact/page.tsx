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
                            Let's Work Together!
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Please send me a message if you have any questions, I'd love to hear from you.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 px-2 md:px-4 mt-10">

                        {/* Email */}
                        <a
                            href={`mailto:${contactData[0].email || 'alvin.ababil2601@gmail.com'}`}
                            className="group bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center gap-4 cursor-pointer py-5"
                        >
                            <div className="w-20 h-20 bg-[#F0F4F8] rounded-full flex items-center justify-center group-hover:bg-[#1B2631] transition-colors duration-300">
                                <i className="bx bx-envelope text-4xl text-[#1B2631] group-hover:text-white transition-colors duration-300"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#1B2631] mb-1">
                                    My Email
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
                                    My CV
                                </h3>
                                <p className="text-gray-500 group-hover:text-[#1B2631] transition-colors duration-300">
                                    Download PDF Version
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
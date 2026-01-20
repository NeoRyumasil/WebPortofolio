import { profileData } from "@/data/content";

// Home Page
export default function Home() {
  return (
    <main>
      <section className="bg-[#F0F4F8] w-full min-h-[80vh] flex items-center justify-center">

        {/* Main Container */}
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col items-center justify-center text-center">

            {/* Text Container */}
            <div className="flex flex-col items-center justify-center max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-7xl text-[#1B2631] font-black mb-6 uppercase tracking-tight leading-tight">
                Web Portofolio <br/>
                <span className="text-blue-600">
                    {profileData.name}
                </span>
              </h1>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a
                href="/about"
                className="bg-[#3F4E4F] text-white px-8 py-3 rounded-md font-bold hover:bg-[#1B2631] transition-all duration-300 shadow-lg transform hover:-translate-y-1 md:pb-3 lg:pb-3"
              >
                  About
              </a>

              <a
                  href="/portofolio"
                  className="bg-[#3F4E4F] text-white px-8 py-3 rounded-md font-bold hover:bg-[#1B2631] transition-all duration-300 shadow-lg transform hover:-translate-y-1 md:pb-3 lg:pb-3"
              >
                  Portofolio
              </a>

              <a
                  href="/contact"
                  className="bg-[#3F4E4F] text-white px-8 py-3 rounded-md font-bold hover:bg-[#1B2631] transition-all duration-300 shadow-lg transform hover:-translate-y-1 md:pb-3 lg:pb-3"
              >
                  Contact
              </a>
            </div>
            

        </div>
      </section>
    </main>
  );
}
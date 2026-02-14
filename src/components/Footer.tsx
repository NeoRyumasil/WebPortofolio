import { footerData } from "@/data/content";

export default function Footer() {
    return (
        <footer className="bg-[#1B2631] text-[#F0F4F8] text-center p-10">
          <p className="text-2xl font-bold mb-2 tracking-wider uppercase">Muhammad Alvin Ababil</p>
          <div className="flex justify-center space-x-8 text-3xl">
            <a href={footerData[0].linkedinLink} target="_blank" className="hover:text-blue-500 transition-colors"><i className="bx bxl-linkedin-square"></i></a>
            <a href={footerData[0].githubLink} target="_blank" className="hover:text-gray-400 transition-colors"><i className="bx bxl-github"></i></a>
            <a href={footerData[0].youtubeLink} target="_blank" className="hover:text-red-500 transition-colors"><i className="bx bxl-youtube"></i></a>
          </div>
          <div className="items-center justify-center text-center text-[#F0F4F8] p-10">
            <p className="text-sm font-bold">&copy; 2025 Muhammad Alvin Ababil</p>
          </div>
        </footer>
    );
}
import Image from "next/image";
import { profileData } from "@/data/content";

export default function NavBar() {
    return (
        <nav className="flex justify-between items-center py-6 px-6 md:px-12 bg-white sticky top-0 z-50 shadow-sm">
            
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

            {/* Menu Button */}
            <ul className="dhidden md:flex gap-6 md:gap-8 text-sm font-bold text-gray-600 tracking-wider">
                <li className="hover:text-[#1B2631] cursor-pointer transition-colors">HOME</li>
                <li className="hover:text-[#1B2631] cursor-pointer transition-colors">PENDIDIKAN</li>
                <li className="hover:text-[#1B2631] cursor-pointer transition-colors">PORTFOLIO</li>
                <li className="hover:text-[#1B2631] cursor-pointer transition-colors">CONTACT</li>
            </ul>
        </nav>
    );
}
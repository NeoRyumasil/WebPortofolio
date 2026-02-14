import { desc } from "framer-motion/client";
import { title } from "process";

export const profileData = {
    name: "Muhammad Alvin Ababil",
    role: "Mahasiswa S-1 Informatika",
    desc: "Saya memiliki ketertarikan dalam bidang IT terutama game developing, IoT, robotik, dan Artificial Intelligence. Saya memiliki pengalaman di bidang programming dan networking saat bersekolah di SMK Telkom Banjarbaru. Saya seorang yang belajar dengan cepat, memiliki kemampuan problem solving dan berpikir logis yang baik, memiliki motivasi diri, dan dapat bekerja sama dengan baik dalam tim.",
    cvLink: "/Datas/CV_MUHAMMAD_ALVIN_ABABIL.pdf",
    imageSrc: "/Datas/Profile_Picture.jpeg",
}

export const educationData = [
    {
        title: "S-1 Informatika",
        institution: "Fakultas Informatika, Universitas Telkom",
        year: "2023 - Sekarang"
    },
    {
        title: "Teknik Komputer dan Jaringan",
        institution: "SMK Telkom Banjarbaru",
        year: "2020 - 2023"
    }
];

export const experienceData = [
    {
        role: "Practicum Assistant",
        place: "Informatics Laboratory Universitas Telkom",
        duration: "September 2025 - Januari 2026",
        desc: "Membantu mahasiswa dalam mempelajari praktikum struktur data dan algoritma serta memberikan bimbingan teknis selama sesi praktikum."
    },
    {
        role: "Project Intern",
        place: "Advanced Software Engineering Laboratory Universitas Telkom",
        duration: "Juli 2024 - September 2024",
        desc: "Mengimplementasikan mekanik game seperti object instantiation, physics, collision detection, dan player input. Mendesain dan mengimplementasikan 3D environment."
    },
    {
        role: "Network Administrator Intern",
        place: "Satuan Brimob Polda Kalimantan Selatan",
        duration: "Januari 2022 - April 2022",
        desc: "Mengelola website analisis data kegiatan kepolisian dan jaringan kepolisian lokal, mengembangkan file excel kegiatan harian kepolisian agar lebih mudah diakses, dan membuat laporan harian."
    }
];

export const organizationData = [
    {
        role: "Member",
        organization: "Advanced Software Engineering Laboratory Universitas Telkom",
        duration: "2024 - Sekarang",
        desc: "Advanced Software Engineering Laboratory adalah salah satu laboratorium fakultas informatika Universitas Telkom yang berfokus pada pengembangan perangkat lunak dan juga pengembagan game. Saya berperan sebagai game designer dan game programmer, dimana saya bertanggung jawab dalam mendesign game (world building dan user experience) dan melakukan pemrograman game menggunakan game engine seperti Godot dan Unity." 
    },
    {
        role: "Sekretaris Divisi Event Organizer (Nihon No Matsuri)",
        organization: "Nippon Bunka-Bu",
        duration: "2024 - Sekarang",
        desc: "Nippon Bunka Bu merupakan unit kegiatan mahasiswa yang berfokus pada budaya Jejepangan. Saya menjadi sekretaris divisi Nihon no Matsuri Event Organizer yang mengorganisir acara budaya Jepang tahunan di Universitas Telkom, termasuk perencanaan, koordinasi, dan pelaksanaan acara."
    },
    {
        role: "Member Divisi Machine Learning",
        organization: "Google Developer on Campus Universitas Telkom",
        duration: "2024 - 2025",
        desc: "Google Developer Student Group adalah komunitas bagi para mahasiswa yang tertarik dengan teknologi Google untuk mengembangkan suatu teknologi. Disini saya mengikuti study group machine learning yang mempelajari teori dan praktik mengenai cara mengimplementasikan machine learning."
    },
    {
        role: "Wakil Kepala Divisi Games and Gadgets",
        organization: "Central Computer Improvement",
        duration: "2023 - 2025",
        desc: "Central Computer Improvement adalah unit kegiatan mahasiswa di Universitas Telkom yang bergerak di bidang penalaran teknologi informasi dan komunikasi. Dimana anggota diberikan pelatihan untuk mengembangkan keterampilan dalam merancang dan melaksanakan proyek. Saya berperan sebagai wakil kepala divisi Games and Gadget, dimana saya bertanggung jawab untuk mengelola program kerja divisi agar sesuai dengan target. "
    },
    {
        role: "Staff Lapangan",
        organization: "MPK SMK Telkom Banjarbaru",
        duration: "2021 - 2022",
        desc: "Majelis Perwakilan Kelas adalah organisasi yang dibuat untuk mengawasi dan membantu kinerja OSIS dalam melaksanakan program kerjanya. Saya berperan sebagaistaff lapangan, dimana Saya bertanggung jawab untuk mengawasi dan membantu OSIS ketika melaksanakan program kerja di lapangan seperti event kemerdekaan, classmeeting, dan MPLS."
    }
];

export const gamePortfolioData = [
    {
        title: "Acumalaka Adventure",
        imageSrc: "/Datas/GameCards/Acumalaka.png",
        desc: "Acumalaka Adventure adalah game yang pertama kali saya kembangkan, berupa game platformer 2D.",
        link: "https://neoryumasil.itch.io/acumalaka-adventure",
        stack: ["C#", "Unity Engine"],
        category: "game"
    },
    {
        title: "Tower Bloxx",
        imageSrc: "/Datas/GameCards/TowerBloxx.png",
        desc: "Tower Bloxx adalah game block stacking dimana pemain harus menumpuk balok-balok untuk membangun sebuah gedung setinggi mungkin.",
        link: "https://neoryumasil.itch.io/towerbloxx",
        stack: ["GDScript", "Godot Engine"],
        category: "game"

    }
];

export const webPortofolioData = [
    {
        title: "MoneyTime",
        imageSrc: "/Datas/WebCards/MoneyTime.png",
        desc: "MoneyTime adalah aplikasi manajemen waktu dan keuangan. Dalam aplikasi ini pengguna dapat memanajemen waktu mereka seperti, penjadwalan, hingga perhitungan waktu. Pengguna juga dapat memanajemen keuangan mereka, seperti mencatat pemasukkan atau pengeluaran sehari-hari dan perhitungan budget keuangan. Terdapat Juga fitur asisten AI yang dapat memberikan rekomendasi manajemen waktu dan keuangan berdasarkan data pengguna.",
        link : "https://moneytime-one.vercel.app",
        stack: ["Flask", "HTML", "CSS", "JavaScript", "PostgreSQL", "Groq"],
        category: "web"
    }
];

export const aiPortofolioData = [
    {
        title: "On Progress",
        imageSrc: "/Datas/Backgrounds/Ai_bg.png",
        desc: "On Progress",
        link : "/",
        stack: [],
        category: "ai"
    }
];

export const eoPortofolioData = [
    {
        title: "On Progress",
        imageSrc: "/Datas/Backgrounds/EventOrganizer_bg.png",
        desc: "On Progress",
        link : "/",
        stack: [],
        category: "eo"
    }
];

export const achievementsData = [
    "Finalis Competitive Programming ADIKARA Tahun 2024.",
    "Pemegang Beasiswa OPES dari SMK Telkom Banjarbaru.",
    "Juara 1 Computer Networking Competition Bytecomp Tahun 2022."
];

export const footerData = [
    {
        linkedinLink: "https://www.linkedin.com/in/muhammad-alvin-ababil-7406592a2/",
        githubLink: "https://github.com/NeoRyumasil",
        youtubeLink: "https://www.youtube.com/@VinToNep"
    }
];

export const contactData = [
    {
        email: "alvin.ababil2601@gmail.com",
        linkedin: "https://www.linkedin.com/in/muhammad-alvin-ababil-7406592a2/",
        github: "https://github.com/NeoRyumasil",
        youtube: "https://www.youtube.com/@VinToNep",
        instagram: "https://www.instagram.com/ababilalvin/",
        x: "https://x.com/NeoRyumasil",
        facebook: "https://www.facebook.com/profile.php?id=100080947032408"
    }
];

export const portoSliderData = [
    {
        title: "Web Portofolio",
        desc: "Kumpulan proyek pengembangan website yang pernah saya kerjakan",
        bgImage: "/Datas/Background/Webdev_bg.png",
        link: "/portofolio/web_portofolio"
    },
    {
        title: "Game Portofolio",
        desc: "Kumpulan proyek pengembangan game yang pernah saya kerjakan",
        bgImage: "/Datas/Background/Gamedev_bg.png",
        link: "/portofolio/game_portofolio"
    },
    {
        title: "Artificial Intelligence Portofolio",
        desc: "Kumpulan proyek machine learning, deep learning, hingga generative AI yang pernah saya kerjakan",
        bgImage: "/Datas/Background/AI_bg.png",
        link: "/portofolio/ai_portofolio"
    },
    {
        title: "Event Organizer Portofolio",
        desc: "Kumpulan acara yang saya pernah menjadi bagian di dalamnya",
        bgImage: "/Datas/Background/EventOrganizer_bg.png",
        link: "/portofolio/eo_portofolio"
    }
];

export const expertiseData = [
    {
        id: "gamedev",
        icon: "gamepad",
        title: "Game Programming",
        desc: "Saya membuat game sederhana menggunakan berbagai game engine dan framework, mulai dari game 2D hingga 3D.",
        stack: ["C#, GDScript, Unity, Godot, Renpy"]
    },
    {
        id: "webdev",
        icon: "server",
        title: "Back End Development",
        desc: "Saya membuat backend aplikasi menggunakan berbagai bahasa pemrograman dan framework.",
        stack: ["NextJS, Flask"]
    },
    {
        id: "machinelearning",
        icon: "cpu",
        title: "Machine Learning",
        desc: "Saya membuat model machine learning untuk berbagai keperluan, mulai dari klasifikasi hingga regresi.",
        stack: ["Python, Scikit-Learn"]
    },
    {
        id: "database",
        icon: "database",
        title: "Database Engineering",
        desc: "Saya mengelola dan merancang database untuk berbagai aplikasi, mulai dari desain hingga implementasi.",
        stack: ["MySQL, PostgreSQL"]
    },
    {
        id: "eventorganizer",
        icon: "calendar",
        title: "Event Organizer",
        desc: "Saya memiliki pengalaman dalam merencanakan, mengorganisir, dan melaksanakan berbagai acara, mulai dari acara kecil hingga besar.",
        stack: ["Project Management, Communication, Leadership"]
    }
]
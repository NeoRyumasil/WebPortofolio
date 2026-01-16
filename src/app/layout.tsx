import { Inter } from "next/font/google";
import "./globals.css";

// Fonts
const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Root Metadata
export default function RootLayout({
  children,
} : {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Muhammad Alvin Ababil - Web Portofolio</title>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      </head>
      <body className={`${interFont.className} bg-[#1B2631] text-[#1B2631] min-h-screen`}>
        {children}
      </body>
    </html>
  )
}


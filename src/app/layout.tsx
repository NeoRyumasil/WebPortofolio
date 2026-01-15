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
      <body className={`${interFont.className} bg-[#1B2631] text-white min-h-screen`}>
        {children}
      </body>
    </html>
  )
}


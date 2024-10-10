import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
    title: "Joki Tugas Murah",
    description: "Butuh bantuan menyelesaikan tugas dengan cepat dan terpercaya? Joki Tugas Murah adalah solusi tepat untuk semua kebutuhan tugas sekolah dan kuliah. Kami melayani berbagai jenjang pendidikan, mulai dari SMA hingga perguruan tinggi. Dengan tim profesional di berbagai bidang, kami siap membantu Anda mengerjakan tugas secara cepat, akurat, dan berkualitas tinggi, sesuai dengan tenggat waktu yang Anda butuhkan."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-bg dark:bg-black text-[#171717] dark:text-foreground`}
      >
      <Navbar />
      {children}
      </body>
    </html>
  );
}

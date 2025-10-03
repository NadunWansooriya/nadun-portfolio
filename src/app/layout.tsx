import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import ScrollIndicator from "@/components/ScrollIndicator";
import LoadingOverlay from "@/components/LoadingOverlay";
import AnimatedBackground from "@/components/AnimatedBackground";
import Particles from "@/components/Particles";
import MouseTrail from "@/components/MouseTrail";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});



export default function RootLayout({ children }: { children: React.ReactNode }) {  return (
    <html lang="en" className={inter.variable}>
      <body>
        {/* Global UI overlays */}
        <LoadingOverlay />
        <ScrollIndicator />
        <AnimatedBackground />
        <Particles />
        <MouseTrail />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

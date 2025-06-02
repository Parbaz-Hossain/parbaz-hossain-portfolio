import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Weight } from "lucide-react";

// Importing the Header component
import Header from "@/components/header";
import PageTransition from "@/components/pagetransition";
import StairTransition from "@/components/stairtransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  Weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-jetbrains-mono"
});

export const metadata = {
  title: "Parbaz Hossain | Portfolio",
  keywords: ["Parbaz Hossain", "Portfolio", "Software Engineer", "Next.js", "React"],
  description: "Parbaz Hossain's portfolio showcasing skills in software engineering, specializing in C#, ASP.NET, MSSQL, Next.js and React.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition> 
      </body>
    </html>
  );
}

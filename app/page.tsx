import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";
import Navbar from "@/components/NavBar";
import ProjectsSection from "@/components/ProjectsSection";
import FinalSection from "@/components/FinalSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative bg-[#020617] min-h-screen text-white">
      <Navbar />
      <main className="pl-20">
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <FinalSection />
      </main>
    </div>
  );
}

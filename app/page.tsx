import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";
import Navbar from "@/components/NavBar";
import ProjectsSection from "@/components/ProjectsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

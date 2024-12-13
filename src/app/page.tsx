import { EducationSection } from "@/sections/Education";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import { ProjectsSection } from "@/sections/Projects";
import { SkillSection } from "@/sections/Skills";
import { WorkSection } from "@/sections/WorkExperience";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";

export default function Home() {
  return (
      <div className="mt-8">
          <Header/>
          <HeroSection/>
          <EducationSection/>
          <WorkSection/>
          <SkillSection/>
          <ProjectsSection/>
          <AboutSection/>
          <ContactSection/>
          <Navbar/>
          <p className={"ml-5"}>Created with TypeScript, Next.js, Tailwind, and CSS Animation</p>
      </div>
  );
}

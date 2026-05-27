"use client";

import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const Education = dynamic(() => import("@/components/Education"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: false });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: false });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function ClientSections() {
  return (
    <>
      <main id="main">
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </>
  );
}

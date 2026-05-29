"use client";

import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Organizations from "@/components/Organizations";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function ClientSections() {
  return (
    <>
      <main id="main">
        <Hero />
        <Experience />
        <Projects />
        <Organizations />
        <Skills />
      </main>
      <Footer />
    </>
  );
}

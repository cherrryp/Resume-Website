import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Roles from "@/components/sections/Roles";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experiences from "@/components/sections/Experiences";

// Section Order
export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <Roles />
        <Skills />
        <Projects />
        <Experiences />
      </main>
      <Footer />
    </>
  );
}

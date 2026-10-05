import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Roles from "@/components/sections/Roles";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";

// ลำดับ section ในหน้าเว็บ — สลับ/เพิ่ม/ลบได้ที่นี่
export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <Roles />
        <Skills />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </>
  );
}

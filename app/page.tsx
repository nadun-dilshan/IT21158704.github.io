import { ThemeProvider } from "@/components/ThemeProvider";
import Preloader from "@/components/Preloader";
import Particles from "@/components/Particles";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <ThemeProvider>
      <Preloader />
      <div className="bg-animation" aria-hidden />
      <Particles />
      <CustomCursor />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </ThemeProvider>
  );
}

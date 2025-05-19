
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  const [showBackground, setShowBackground] = useState(true);
  
  // Add error handling for the 3D background
  useEffect(() => {
    const handleError = () => {
      console.log("Falling back to static background due to WebGL error");
      setShowBackground(false);
    };

    window.addEventListener('error', handleError);
    
    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {showBackground && <AnimatedBackground />}
      
      {/* Fallback gradient background */}
      {!showBackground && (
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-purple-500/20 via-background to-blue-500/20"></div>
      )}
      
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

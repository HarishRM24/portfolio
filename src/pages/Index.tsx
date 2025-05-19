
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
  // Default to NOT showing 3D background to prevent blank screen issues
  const [showBackground, setShowBackground] = useState(false);
  
  useEffect(() => {
    try {
      // Check if WebGL is available
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      
      if (gl && gl instanceof WebGLRenderingContext) {
        // WebGL is supported, enable the 3D background
        setShowBackground(true);
      } else {
        console.log("WebGL not supported, using fallback background");
      }
    } catch (e) {
      console.log("Error checking WebGL support:", e);
    }
    
    // Add global error handler as a backup
    const handleError = (event) => {
      if (
        event.message && 
        (event.message.includes('WebGL') || 
         event.message.includes('ReactSharedInternals') ||
         event.message.includes('three'))
      ) {
        console.log("3D rendering error detected, switching to fallback background");
        setShowBackground(false);
      }
    };

    window.addEventListener('error', handleError);
    
    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Only try to render the 3D background if it's safe to do so */}
      {showBackground && <AnimatedBackground />}
      
      {/* Always have a fallback background ready */}
      <div 
        className={`fixed inset-0 -z-10 bg-gradient-to-br from-purple-500/20 via-background to-blue-500/20 transition-opacity duration-500 ${
          showBackground ? 'opacity-0' : 'opacity-100'
        }`}
      ></div>
      
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

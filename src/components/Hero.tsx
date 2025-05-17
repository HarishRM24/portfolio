
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="animate-fade-in">
              <h2 className="text-lg md:text-xl text-primary font-medium mb-2">
                Hello, I'm
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Harish A
              </h1>
              <h3 className="text-xl md:text-2xl text-muted-foreground font-semibold mb-6">
                Software Engineer & AI Enthusiast
              </h3>
              <p className="text-base md:text-lg text-muted-foreground max-w-lg mb-8">
                Building Intelligent Solutions for the Future. Passionate about machine learning, software development, and creating impactful technologies.
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <a href="#contact">Get in Touch</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#about">About Me</a>
                </Button>
              </div>
              <div className="flex gap-4 mt-8">
                <Button size="icon" variant="outline" asChild>
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github size={20} />
                  </a>
                </Button>
                <Button size="icon" variant="outline" asChild>
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                </Button>
                <Button size="icon" variant="outline" asChild>
                  <a href="mailto:harish.arasu2002@gmail.com" aria-label="Email">
                    <Mail size={20} />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center md:justify-end">
            <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full border-4 border-primary overflow-hidden animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                alt="Harish A"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

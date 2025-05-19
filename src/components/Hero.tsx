
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="animate-fade-in">
              <h2 className="text-lg md:text-xl text-primary font-medium mb-2">
                Hello, I'm
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gradient">
                Harish A
              </h1>
              <h3 className="text-xl md:text-2xl text-muted-foreground font-semibold mb-6">
                Software Engineer & AI Enthusiast
              </h3>
              <p className="text-base md:text-lg text-muted-foreground max-w-lg mb-8">
                Building Intelligent Solutions for the Future. Passionate about machine learning, 
                software development, and creating impactful technologies.
              </p>
              <div className="flex gap-4">
                <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-purple-700 hover:to-primary/90 shadow-md hover:shadow-lg transition-all duration-300" asChild>
                  <a href="#contact">Get in Touch</a>
                </Button>
                <Button variant="outline" className="border-primary/20 hover:border-primary/50 hover:bg-primary/5 shadow-sm" asChild>
                  <a href="#about">About Me</a>
                </Button>
              </div>
              <div className="flex gap-4 mt-8">
                <Button size="icon" variant="outline" className="rounded-full border-primary/20 hover:border-primary hover:bg-primary/5 transition-all" asChild>
                  <a href="https://github.com/HarishRM24" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github size={20} />
                  </a>
                </Button>
                <Button size="icon" variant="outline" className="rounded-full border-primary/20 hover:border-primary hover:bg-primary/5 transition-all" asChild>
                  <a href="https://www.linkedin.com/in/harish-arasu-890a4824b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                </Button>
                <Button size="icon" variant="outline" className="rounded-full border-primary/20 hover:border-primary hover:bg-primary/5 transition-all" asChild>
                  <a href="https://www.geeksforgeeks.org/user/harisharasu2002/" target="_blank" rel="noopener noreferrer" aria-label="GeeksforGeeks">
                    <span className="font-bold">GfG</span>
                  </a>
                </Button>
                <Button size="icon" variant="outline" className="rounded-full border-primary/20 hover:border-primary hover:bg-primary/5 transition-all" asChild>
                  <a href="https://leetcode.com/u/harishRM/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
                    <span className="font-bold">LC</span>
                  </a>
                </Button>
                <Button size="icon" variant="outline" className="rounded-full border-primary/20 hover:border-primary hover:bg-primary/5 transition-all" asChild>
                  <a href="mailto:harish.arasu2002@gmail.com" aria-label="Email">
                    <Mail size={20} />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-full blur-2xl"></div>
              <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full border-4 border-primary/40 overflow-hidden animate-float shadow-2xl">
                <img
                  src="/lovable-uploads/9078a33f-a42b-4290-83aa-321a556f8ec3.png"
                  alt="Harish A"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

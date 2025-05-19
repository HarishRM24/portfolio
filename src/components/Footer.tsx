
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-muted -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 via-purple-500/40 to-primary/40"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-xl font-bold text-gradient">Harish A</p>
            <p className="text-sm text-muted-foreground">Software Engineer & AI Enthusiast</p>
          </div>
          
          <div className="flex gap-4 mb-6 md:mb-0">
            <a 
              href="https://github.com/HarishRM24" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/harish-arasu-890a4824b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://www.geeksforgeeks.org/user/harisharasu2002/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
              aria-label="GeeksforGeeks"
            >
              <span className="font-bold text-xs">GfG</span>
            </a>
            <a 
              href="https://leetcode.com/u/harishRM/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
              aria-label="LeetCode"
            >
              <span className="font-bold text-xs">LC</span>
            </a>
            <a 
              href="mailto:harish.arasu2002@gmail.com" 
              className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © {currentYear} <span className="text-gradient font-medium">Harish A</span>. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

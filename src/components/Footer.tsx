
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold">Harish A</p>
            <p className="text-sm text-muted-foreground">Software Engineer & AI Enthusiast</p>
          </div>
          
          <div className="flex gap-4 mb-4 md:mb-0">
            <a 
              href="https://github.com/HarishRM24" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/harish-arasu-890a4824b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://www.geeksforgeeks.org/user/harisharasu2002/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
              aria-label="GeeksforGeeks"
            >
              <span className="font-bold text-xs">GfG</span>
            </a>
            <a 
              href="https://leetcode.com/u/harishRM/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
              aria-label="LeetCode"
            >
              <span className="font-bold text-xs">LC</span>
            </a>
            <a 
              href="mailto:harish.arasu2002@gmail.com" 
              className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © {currentYear} Harish A. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Brain, Code, Cpu, Layers } from "lucide-react";

interface MobileNavProps {
  activeSection?: string;
}

const MobileNav = ({ activeSection = "" }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    "Home", "About", "Experience", "Projects", "Skills", "Certifications", "Contact"
  ];
  
  return (
    <div className="md:hidden">
      <Button
        size="icon"
        variant="ghost"
        onClick={toggleMenu}
        className="rounded-full hover:bg-primary/10"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </Button>
      
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl">
          <div className="container py-16 flex flex-col items-center">
            <div className="bg-gradient-to-b from-background/95 to-muted/30 border border-primary/10 backdrop-blur-lg rounded-xl p-6 w-full max-w-xs shadow-xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-10 right-5 w-20 h-20 bg-primary/10 rounded-full blur-xl -z-10"></div>
              <div className="absolute bottom-10 left-5 w-24 h-24 bg-purple-500/10 rounded-full blur-xl -z-10"></div>
              
              {/* Floating icons (subtle) */}
              <div className="absolute top-5 left-5 animate-float opacity-30" style={{animationDelay: '0.5s'}}>
                <Brain size={20} className="text-primary" />
              </div>
              <div className="absolute bottom-20 right-5 animate-float opacity-30" style={{animationDelay: '1.2s'}}>
                <Code size={20} className="text-purple-500" />
              </div>
              <div className="absolute bottom-40 left-10 animate-float opacity-30" style={{animationDelay: '0.8s'}}>
                <Cpu size={20} className="text-blue-500" />
              </div>
              <div className="absolute top-40 right-10 animate-float opacity-30" style={{animationDelay: '1.5s'}}>
                <Layers size={20} className="text-green-500" />
              </div>
              
              {/* Navigation items */}
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`block py-4 text-xl font-medium text-center transition-colors relative group ${
                    activeSection === item.toLowerCase() 
                      ? "text-gradient font-bold" 
                      : "hover:text-primary"
                  }`}
                  onClick={closeMenu}
                >
                  {item}
                  <span 
                    className={`absolute left-1/4 right-1/4 bottom-3 h-0.5 bg-gradient-to-r from-primary to-purple-500 transition-transform origin-left ${
                      activeSection === item.toLowerCase() 
                        ? "scale-x-100" 
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                </a>
              ))}
              <Button 
                onClick={closeMenu} 
                className="mt-8 w-full bg-gradient-to-r from-primary to-purple-600 hover:opacity-90"
              >
                Close Menu
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;

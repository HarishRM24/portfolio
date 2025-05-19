
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const closeMenu = () => {
    setIsOpen(false);
  };
  
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
        <div className="fixed inset-0 z-50 bg-background/90 backdrop-blur-md">
          <div className="container py-16 flex flex-col items-center">
            <div className="bg-gradient-to-b from-background to-muted/30 border border-primary/10 backdrop-blur-sm rounded-xl p-6 w-full max-w-xs shadow-xl">
              {["Home", "About", "Experience", "Projects", "Skills", "Certifications", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block py-4 text-xl font-medium text-center hover:text-primary transition-colors relative group"
                    onClick={closeMenu}
                  >
                    {item}
                    <span className="absolute left-1/4 right-1/4 bottom-3 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </a>
                )
              )}
              <Button onClick={closeMenu} className="mt-8 w-full bg-gradient-to-r from-primary to-purple-600 hover:opacity-90">
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

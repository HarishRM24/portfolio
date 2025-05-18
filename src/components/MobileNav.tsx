
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
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </Button>
      
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur">
          <div className="container py-16 flex flex-col items-center">
            <div className="bg-background/90 border border-border backdrop-blur-sm rounded-lg p-4 w-full max-w-xs shadow-lg">
              {["Home", "About", "Experience", "Projects", "Skills", "Certifications", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block py-4 text-xl font-medium text-center hover:text-primary transition-colors"
                    onClick={closeMenu}
                  >
                    {item}
                  </a>
                )
              )}
              <Button onClick={closeMenu} className="mt-8 w-full">
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

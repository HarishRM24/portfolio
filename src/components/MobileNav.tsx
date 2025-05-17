
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
            {["Home", "About", "Experience", "Projects", "Skills", "Certifications", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="py-4 text-xl font-medium hover:text-primary transition-colors"
                  onClick={closeMenu}
                >
                  {item}
                </a>
              )
            )}
            <Button onClick={closeMenu} className="mt-8">
              Close Menu
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;

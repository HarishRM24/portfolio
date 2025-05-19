
import { Button } from "@/components/ui/button";
import { FileDown, Cpu, Brain } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-purple relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      
      {/* Floating elements */}
      <div className="hidden md:block absolute top-1/4 left-1/6 floating-image" style={{animationDelay: '1.2s'}}>
        <Brain size={32} className="text-purple-500/50" />
      </div>
      <div className="hidden md:block absolute bottom-1/4 right-1/6 floating-image" style={{animationDelay: '0.8s'}}>
        <Cpu size={32} className="text-primary/50" />
      </div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gradient">
          About Me
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mb-12"></div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-lg overflow-hidden shadow-2xl card-3d">
              <div className="card-3d-inner">
                <img
                  src="/lovable-uploads/662510ef-688f-4f16-ae01-4e542f7b6f42.png"
                  alt="Harish A Working"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <p className="text-lg mb-6">
              I'm a passionate Software Engineer and Machine Learning enthusiast pursuing an Integrated MTech in Software Engineering from VIT (2020-2025). I love solving complex problems and building intelligent solutions that make a difference.
            </p>
            <p className="text-lg mb-6">
              My current interests include deep learning, natural language processing, and developing full-stack applications. I'm particularly fascinated by the intersection of AI and healthcare, where I believe technology can create the most meaningful impact.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-background/80 backdrop-blur-sm rounded-md p-4 flex-1 min-w-[200px] shadow-lg border border-primary/10 card-hover">
                <h3 className="text-lg font-bold text-gradient">Education</h3>
                <p>Integrated MTech, Software Engineering</p>
                <p>VIT, 2020-2025</p>
              </div>
              <div className="bg-background/80 backdrop-blur-sm rounded-md p-4 flex-1 min-w-[200px] shadow-lg border border-primary/10 card-hover">
                <h3 className="text-lg font-bold text-gradient">Interests</h3>
                <p>Machine Learning, Deep Learning</p>
                <p>Full-stack Development</p>
              </div>
            </div>
            
            <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-purple-700 hover:to-primary/90 shadow-md" asChild>
              <a href="https://drive.google.com/file/d/1zXXYHSa2iuQ3MsJ1uunZYvI3fwhK-cNv/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                <FileDown className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

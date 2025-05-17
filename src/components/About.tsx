
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          About Me
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12"></div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Harish A Working"
                className="w-full h-full object-cover"
              />
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
              <div className="bg-background shadow rounded-md p-4 flex-1 min-w-[200px]">
                <h3 className="text-lg font-bold">Education</h3>
                <p>Integrated MTech, Software Engineering</p>
                <p>VIT, 2020-2025</p>
              </div>
              <div className="bg-background shadow rounded-md p-4 flex-1 min-w-[200px]">
                <h3 className="text-lg font-bold">Interests</h3>
                <p>Machine Learning, Deep Learning</p>
                <p>Full-stack Development</p>
              </div>
            </div>
            
            <Button asChild>
              <a href="/resume.pdf" download>
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

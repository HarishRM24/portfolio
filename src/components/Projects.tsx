
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Conversational AI Platform for Mental Health",
    description: "Developed an intelligent mental health assistant using LLMs (OpenAI GPT-4 + LangChain) that can answer user queries, suggest resources, and detect sentiment in conversations with privacy-preserving techniques.",
    tags: ["OpenAI GPT-4", "LangChain", "Mental Health AI", "Sentiment Analysis", "Privacy-Preserving"],
    githubLink: "https://github.com/HarishRM24/well-being-talk-space",
    demoLink: "https://well-being-talk-space.lovable.app"
  },
  {
    title: "Federated Learning on Epilepsy Detection",
    description: "Developed a privacy-preserving deep learning model for epilepsy detection using EEG data, implementing Federated Learning across decentralized nodes while ensuring data privacy.",
    tags: ["CNN", "PyTorch", "PySyft", "Federated Learning", "Healthcare AI"],
    githubLink: "https://github.com/HarishRM24",
    demoLink: null
  },
  {
    title: "Alzheimer's Disease Detection with Hybrid Models",
    description: "Built two hybrid deep learning models (ResNet50 + CNN and EfficientNet + CNN) to classify Alzheimer's disease stages from MRI scans, achieving high classification accuracy.",
    tags: ["PyTorch", "ResNet50", "EfficientNet", "Medical Imaging", "Transfer Learning"],
    githubLink: "https://github.com/HarishRM24",
    demoLink: null
  },
  {
    title: "World Happiness Prediction Website",
    description: "A web application that predicts happiness scores for countries based on various socio-economic factors using machine learning models.",
    tags: ["Flask", "Python", "Machine Learning", "Pandas", "Scikit-learn"],
    githubLink: "https://github.com/HarishRM24/World_happinesss_ML",
    demoLink: "http://happinesspredictor.pythonanywhere.com/"
  },
  {
    title: "Medical Chatbot",
    description: "An intelligent chatbot built with Google Dialogflow that answers common health questions and helps users find relevant medical information.",
    tags: ["Google Dialogflow", "NLP", "JavaScript", "Node.js", "Healthcare"],
    githubLink: "https://github.com/HarishRM24",
    demoLink: "https://medaichatbot.vercel.app/"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Projects
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col h-full border border-border hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="line-clamp-3">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button size="sm" variant="outline" asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </Button>
                {project.demoLink && (
                  <Button size="sm" asChild>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

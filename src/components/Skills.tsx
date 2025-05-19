
import { Card, CardContent } from "@/components/ui/card";
import { Code, Coffee, FileCode, Smartphone, Database, Server, GitBranch, BarChart3, Laptop, Brain, Cpu, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

const skillCategories = [
  {
    name: "Languages",
    icon: <Code size={24} />,
    skills: [
      { name: "Java", icon: Coffee },
      { name: "C++", icon: FileCode }, 
      { name: "Python", icon: Code }
    ]
  },
  {
    name: "Web/Frameworks",
    icon: <Layers size={24} />,
    skills: [
      { name: "React.js", icon: Code },
      { name: "Node.js", icon: Server },
      { name: "Flask", icon: FileCode }
    ]
  },
  {
    name: "Mobile Dev",
    icon: <Smartphone size={24} />,
    skills: [
      { name: "iOS", icon: Smartphone }
    ]
  },
  {
    name: "Databases",
    icon: <Database size={24} />,
    skills: [
      { name: "MySQL", icon: Database },
      { name: "Firebase", icon: Server },
      { name: "MongoDB", icon: Database }
    ]
  },
  {
    name: "Tools",
    icon: <Laptop size={24} />,
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "Jira", icon: BarChart3 },
      { name: "VS Code", icon: Laptop },
      { name: "PyCharm", icon: Brain }
    ]
  },
  {
    name: "AI/ML",
    icon: <Brain size={24} />,
    skills: [
      { name: "TensorFlow", icon: Brain },
      { name: "PyTorch", icon: Cpu },
      { name: "Scikit-Learn", icon: FileCode }
    ]
  }
];

const SkillItem = ({ name, Icon }) => (
  <div className="mb-4">
    <Badge variant="outline" className="flex items-center gap-2 px-3 py-2 text-sm bg-background/80 backdrop-blur-sm hover:bg-primary/5 transition-all duration-300 border-primary/20">
      <Icon size={16} className="text-primary" />
      <span>{name}</span>
    </Badge>
  </div>
);

const Skills = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="skills" className="py-20 bg-gradient-blue relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      {/* Floating elements */}
      <div className="hidden md:block absolute top-1/3 right-1/6 floating-image" style={{animationDelay: '0.5s'}}>
        <Cpu size={32} className="text-blue-500/50" />
      </div>
      <div className="hidden md:block absolute bottom-1/3 left-1/6 floating-image" style={{animationDelay: '1.3s'}}>
        <Code size={32} className="text-primary/50" />
      </div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gradient">
          Skills
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`card-3d ${mounted ? 'animate-fade-in' : 'opacity-0'}`} 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="border border-primary/10 hover:shadow-lg transition-all bg-background/80 backdrop-blur-sm overflow-hidden card-3d-inner">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-500"></div>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gradient">{category.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <SkillItem
                        key={idx}
                        name={skill.name}
                        Icon={skill.icon}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

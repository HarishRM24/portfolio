
import { Card, CardContent } from "@/components/ui/card";
import { Code, Coffee, FileCode, Smartphone, Database, Server, GitBranch, BarChart3, Laptop, Brain } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    name: "Languages",
    skills: [
      { name: "Java", icon: Coffee },
      { name: "C++", icon: FileCode }, 
      { name: "Python", icon: Code }
    ]
  },
  {
    name: "Web/Frameworks",
    skills: [
      { name: "React.js", icon: Code },
      { name: "Node.js", icon: Server },
      { name: "Flask", icon: FileCode }
    ]
  },
  {
    name: "Mobile Dev",
    skills: [
      { name: "iOS", icon: Smartphone }
    ]
  },
  {
    name: "Databases",
    skills: [
      { name: "MySQL", icon: Database },
      { name: "Firebase", icon: Server },
      { name: "MongoDB", icon: Database }
    ]
  },
  {
    name: "Tools",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "Jira", icon: BarChart3 },
      { name: "VS Code", icon: Laptop },
      { name: "PyCharm", icon: Brain }
    ]
  }
];

const SkillItem = ({ name, Icon }) => (
  <div className="mb-4">
    <Badge variant="outline" className="flex items-center gap-2 px-3 py-2 text-sm">
      <Icon size={16} />
      <span>{name}</span>
    </Badge>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Skills
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border border-border hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-6">{category.name}</h3>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

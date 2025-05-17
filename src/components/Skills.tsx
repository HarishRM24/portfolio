
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Coffee, FileCode, Smartphone, Database, Server, GitBranch, BarChart3, Laptop, Brain } from "lucide-react";

const skillCategories = [
  {
    name: "Languages",
    skills: [
      { name: "Java", level: 90, icon: Coffee },
      { name: "C++", level: 85, icon: FileCode }, 
      { name: "Python", level: 95, icon: Code }
    ]
  },
  {
    name: "Web/Frameworks",
    skills: [
      { name: "React.js", level: 85, icon: Code },
      { name: "Node.js", level: 80, icon: Server },
      { name: "Flask", level: 90, icon: FileCode }
    ]
  },
  {
    name: "Mobile Dev",
    skills: [
      { name: "iOS", level: 75, icon: Smartphone }
    ]
  },
  {
    name: "Databases",
    skills: [
      { name: "MySQL", level: 85, icon: Database },
      { name: "Firebase", level: 80, icon: Server },
      { name: "MongoDB", level: 75, icon: Database }
    ]
  },
  {
    name: "Tools",
    skills: [
      { name: "Git", level: 95, icon: GitBranch },
      { name: "Jira", level: 80, icon: BarChart3 },
      { name: "VS Code", level: 90, icon: Laptop },
      { name: "PyCharm", level: 85, icon: Brain }
    ]
  }
];

const SkillItem = ({ name, level, Icon }) => (
  <div className="mb-6">
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-2">
        <Icon size={18} />
        <span>{name}</span>
      </div>
      <span className="text-sm font-medium">{level}%</span>
    </div>
    <Progress value={level} className="h-2" />
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
                {category.skills.map((skill, idx) => (
                  <SkillItem
                    key={idx}
                    name={skill.name}
                    level={skill.level}
                    Icon={skill.icon}
                  />
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

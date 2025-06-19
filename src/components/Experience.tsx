
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "AI Engineer",
    company: "LogisoftTech",
    period: "Present",
    description: "Currently working as an AI Engineer developing intelligent solutions and implementing machine learning models. Contributing to various AI projects and working with cutting-edge technologies to solve complex business problems.",
    skills: ["Artificial Intelligence", "Machine Learning", "Python", "Deep Learning", "AI Solutions"]
  },
  {
    title: "Data Scientist Intern",
    company: "Smart Internz",
    period: "May - July 2023",
    description: "Developed and deployed machine learning models using Flask. Implemented ARIMA and SARIMAX models for time series forecasting. Worked on data preprocessing and feature engineering for various datasets.",
    skills: ["Python", "Flask", "Machine Learning", "Time Series Analysis", "Data Preprocessing"]
  },
  {
    title: "ML Engineer Intern",
    company: "Hope AI",
    period: "October - November 2023",
    description: "Built end-to-end machine learning pipelines. Collaborated with cross-functional teams to implement AI solutions. Optimized ML models for better performance and faster inference times.",
    skills: ["Deep Learning", "Python", "TensorFlow", "Model Optimization", "Team Collaboration"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Experience
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border border-border hover:shadow-lg transition-all">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription className="text-lg mt-1">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="text-sm">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
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

export default Experience;

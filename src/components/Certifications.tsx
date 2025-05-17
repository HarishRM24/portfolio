
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    title: "Google Applied Data Science",
    issuer: "Google",
    date: "December 2023",
    skills: ["Data Science", "Python", "Machine Learning", "Data Visualization"]
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera",
    date: "October 2023",
    skills: ["Machine Learning", "Neural Networks", "Supervised Learning"]
  },
  {
    title: "Time Series Analysis & Forecasting",
    issuer: "Hope AI",
    date: "November 2023",
    skills: ["Time Series", "ARIMA", "SARIMAX", "Forecasting"]
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Certifications
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="border border-border hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle>{cert.title}</CardTitle>
                <div className="flex justify-between text-sm text-muted-foreground mt-2">
                  <span>{cert.issuer}</span>
                  <span>{cert.date}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
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

export default Certifications;

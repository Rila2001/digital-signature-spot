import { Card, CardContent } from "@/components/ui/card";
import { Code, Smartphone, GitBranch, Figma } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      icon: Code,
      title: "HTML, CSS, JavaScript",
      description: "Modern web technologies for building interactive experiences"
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring perfect display on all devices"
    },
    {
      icon: GitBranch,
      title: "Git & GitHub",
      description: "Version control and collaborative development workflows"
    },
    {
      icon: Figma,
      title: "Figma",
      description: "Design tools for creating user interfaces and prototypes"
    }
  ];

  return (
    <section id="skills" className="py-section px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Skills
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="group shadow-card hover:shadow-card-hover transition-smooth cursor-pointer transform hover:-translate-y-1 border-0 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-smooth">
                  <skill.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  {skill.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
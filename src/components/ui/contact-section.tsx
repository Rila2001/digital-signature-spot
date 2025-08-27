import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "yourname@email.com",
      href: "mailto:yourname@email.com",
      description: "Drop me a line"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/yourname",
      href: "https://linkedin.com/in/yourname",
      description: "Let's connect professionally"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/yourname",
      href: "https://github.com/yourname",
      description: "Check out my code"
    }
  ];

  return (
    <section id="contact" className="py-section px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to work together!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <Card 
                key={index} 
                className="group shadow-card hover:shadow-card-hover transition-smooth border-0 bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-smooth">
                    <method.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {method.label}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {method.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:border-primary transition-smooth"
                    asChild
                  >
                    <a 
                      href={method.href}
                      target={method.label !== "Email" ? "_blank" : undefined}
                      rel={method.label !== "Email" ? "noopener noreferrer" : undefined}
                    >
                      {method.label === "Email" ? method.value : method.label}
                      <ArrowUpRight className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Card className="shadow-card border-0 bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="p-8">
                <p className="text-lg font-medium text-foreground mb-4">
                  Ready to start a project together?
                </p>
                <Button 
                  size="lg" 
                  className="px-8 py-3 text-lg font-medium"
                  asChild
                >
                  <a href="mailto:yourname@email.com">
                    Get In Touch
                    <ArrowUpRight className="h-5 w-5 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
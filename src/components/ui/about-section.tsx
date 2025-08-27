import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-section px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-card hover:shadow-card-hover transition-smooth border-0 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground text-center">
                I'm passionate about creating digital experiences that are not only visually appealing 
                but also highly functional and user-friendly. With a strong foundation in modern web 
                technologies and a keen eye for design, I bring ideas to life through clean, efficient code.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground text-center mt-6">
                Whether working on personal projects or collaborating with teams, I'm committed to 
                continuous learning and staying up-to-date with the latest web development trends and 
                best practices.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Utensils, HeartHandshake, Sparkles } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "Free Education",
      description: "Comprehensive learning programs from basic literacy to advanced subjects, tailored to each child's needs.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Utensils,
      title: "Nutrition Support",
      description: "Healthy meals and nutrition programs to ensure children have the energy to learn and grow.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: HeartHandshake,
      title: "Mentorship",
      description: "One-on-one guidance and support from dedicated volunteers and educators.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Sparkles,
      title: "Life Skills",
      description: "Building confidence, creativity, and essential skills for a successful future.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <section id="programs" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Programs
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We offer comprehensive support to ensure every child has access to quality education and
            opportunities for a brighter future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card
                key={index}
                className="border-border hover:shadow-soft transition-all duration-300 bg-card"
              >
                <CardHeader>
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${program.bgColor} ${program.color} mb-3`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-heading text-xl">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {program.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;

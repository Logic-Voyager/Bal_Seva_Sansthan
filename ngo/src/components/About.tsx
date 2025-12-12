import { Heart, BookOpen, Users, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We believe every child deserves love, care, and opportunities to thrive",
    },
    {
      icon: BookOpen,
      title: "Education",
      description: "Quality learning is the foundation for breaking the cycle of poverty",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building strong networks of support for sustainable change",
    },
    {
      icon: Target,
      title: "Impact",
      description: "Measuring success through the transformed lives of children",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Who We Are
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Bal Seva Sansthaan means "a place for the young lil' cute lifes". For over 9 years, we've been working to provide free, quality
            education to underprivileged children across Delhi NCR, helping them discover their potential
            and build their own identity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card
                key={index}
                className="border-border hover:shadow-card transition-shadow duration-300 bg-card"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;

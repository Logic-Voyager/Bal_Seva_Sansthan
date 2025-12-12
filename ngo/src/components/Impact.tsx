import { Users, BookOpen, Award, Heart } from "lucide-react";

const Impact = () => {
  const stats = [
    {
      icon: Users,
      number: "2000+",
      label: "Children Educated",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: BookOpen,
      number: "15+",
      label: "Learning Centers",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Award,
      number: "500+",
      label: "Success Stories",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Heart,
      number: "9+",
      label: "Years of Impact",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <section id="impact" className="py-16 md:py-24 bg-gradient-warm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Impact
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Through dedication and community support, we're transforming lives one child at a time.
            Here's what we've achieved together.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-border hover:shadow-card transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex h-16 w-16 items-center justify-center rounded-full ${stat.bgColor} ${stat.color} mb-4`}>
                  <Icon className="h-8 w-8" />
                </div>
                <div className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Impact;

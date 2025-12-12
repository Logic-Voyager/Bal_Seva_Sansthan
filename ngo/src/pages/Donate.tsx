import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Heart, Users, BookOpen, Utensils } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Donate = () => {
  const { toast } = useToast();

  const handleDonate = (amount: string) => {
    toast({
      title: "Thank you for your generosity!",
      description: `Donation of ${amount} will be processed. Redirecting to payment...`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-warm overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Make a <span className="text-transparent bg-clip-text bg-gradient-hero">Difference</span> Today
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Your contribution helps provide education, nutrition, and hope to underprivileged children.
              Every donation, no matter the size, creates lasting change.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="font-heading text-3xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Children Educated</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <div className="font-heading text-3xl font-bold text-foreground">50+</div>
              <div className="text-sm text-muted-foreground">Learning Centers</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Utensils className="h-8 w-8 text-primary" />
              </div>
              <div className="font-heading text-3xl font-bold text-foreground">1000+</div>
              <div className="text-sm text-muted-foreground">Meals Daily</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <div className="font-heading text-3xl font-bold text-foreground">100+</div>
              <div className="text-sm text-muted-foreground">Volunteers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Plans */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your Contribution
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select a donation tier or enter a custom amount. All contributions are tax-deductible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {/* Basic Plan */}
            <Card className="p-8 border-2 hover:border-primary transition-colors">
              <div className="text-center mb-6">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Supporter</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">₹500</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Provide books and supplies for 2 children</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Monthly impact report</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Certificate of appreciation</span>
                </li>
              </ul>
              <Button 
                onClick={() => handleDonate("₹500/month")}
                className="w-full" 
                variant="outline"
              >
                Donate Now
              </Button>
            </Card>

            {/* Champion Plan */}
            <Card className="p-8 border-2 border-primary bg-gradient-to-b from-primary/5 to-transparent relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-hero text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <div className="text-center mb-6">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Champion</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">₹2,000</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Sponsor education for 1 child completely</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Quarterly visit to learning center</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Direct updates from sponsored child</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Recognition on website</span>
                </li>
              </ul>
              <Button 
                onClick={() => handleDonate("₹2,000/month")}
                className="w-full bg-gradient-hero hover:opacity-90 transition-opacity"
              >
                Donate Now
              </Button>
            </Card>

            {/* Patron Plan */}
            <Card className="p-8 border-2 hover:border-primary transition-colors">
              <div className="text-center mb-6">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Patron</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">₹5,000</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Support a complete classroom</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Monthly meetings with leadership</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Naming rights opportunity</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">All Champion benefits</span>
                </li>
              </ul>
              <Button 
                onClick={() => handleDonate("₹5,000/month")}
                className="w-full" 
                variant="outline"
              >
                Donate Now
              </Button>
            </Card>
          </div>

          {/* One-time Donation */}
          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4 text-center">
                One-Time Contribution
              </h3>
              <p className="text-muted-foreground text-center mb-6">
                Every contribution counts. Choose an amount or enter your own.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <Button 
                  onClick={() => handleDonate("₹500")}
                  variant="outline" 
                  className="h-16 text-lg font-semibold"
                >
                  ₹500
                </Button>
                <Button 
                  onClick={() => handleDonate("₹1,000")}
                  variant="outline" 
                  className="h-16 text-lg font-semibold"
                >
                  ₹1,000
                </Button>
                <Button 
                  onClick={() => handleDonate("₹2,500")}
                  variant="outline" 
                  className="h-16 text-lg font-semibold"
                >
                  ₹2,500
                </Button>
                <Button 
                  onClick={() => handleDonate("₹5,000")}
                  variant="outline" 
                  className="h-16 text-lg font-semibold"
                >
                  ₹5,000
                </Button>
              </div>
              <Button 
                onClick={() => handleDonate("Custom Amount")}
                className="w-full h-12 bg-gradient-hero hover:opacity-90 transition-opacity"
              >
                Donate Custom Amount
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;

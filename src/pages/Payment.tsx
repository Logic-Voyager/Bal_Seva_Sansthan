import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Heart, CreditCard, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Payment = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const presetAmount = searchParams.get("amount");
  
  const { toast } = useToast();
  const [amount, setAmount] = useState(presetAmount || "");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!amount || parseFloat(amount) <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid donation amount.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Thank you for your donation!",
      description: `Your donation of ₹${amount} has been processed successfully.`,
    });
    
    setIsProcessing(false);
    navigate("/donate");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-warm overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/donate")}
            className="mb-4 hover:bg-background/20"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Donate
          </Button>
          <div className="max-w-2xl">
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Your <span className="text-transparent bg-clip-text bg-gradient-hero">Donation</span>
            </h1>
            <p className="text-muted-foreground">
              Your generosity will help transform the lives of underprivileged children.
            </p>
          </div>
        </div>
      </section>

      {/* Payment Form */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-6">
                {/* Donation Amount */}
                <Card className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Heart className="h-5 w-5 text-primary" />
                    <h2 className="font-heading text-xl font-semibold text-foreground">
                      Donation Amount
                    </h2>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="amount">Enter Amount (₹)</Label>
                      <div className="relative mt-1.5">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                          ₹
                        </span>
                        <Input
                          id="amount"
                          type="number"
                          placeholder="Enter amount"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          className="pl-8 h-12 text-lg"
                          min="1"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["500", "1000", "2500", "5000", "10000"].map((preset) => (
                        <Button
                          key={preset}
                          type="button"
                          variant={amount === preset ? "default" : "outline"}
                          size="sm"
                          onClick={() => setAmount(preset)}
                        >
                          ₹{parseInt(preset).toLocaleString()}
                        </Button>
                      ))}
                    </div>
                  </div>
                </Card>

                {/* Personal Details */}
                <Card className="p-6">
                  <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                    Personal Details
                  </h2>
                  <div className="grid gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="mt-1.5"
                        required
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="mt-1.5"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="mt-1.5"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Payment Details */}
                <Card className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <CreditCard className="h-5 w-5 text-primary" />
                    <h2 className="font-heading text-xl font-semibold text-foreground">
                      Payment Details
                    </h2>
                  </div>
                  <div className="grid gap-4">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={formData.cardNumber}
                        onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                        className="mt-1.5"
                        maxLength={19}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input
                          id="expiry"
                          placeholder="MM/YY"
                          value={formData.expiry}
                          onChange={(e) => handleInputChange("expiry", e.target.value)}
                          className="mt-1.5"
                          maxLength={5}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          type="password"
                          placeholder="•••"
                          value={formData.cvv}
                          onChange={(e) => handleInputChange("cvv", e.target.value)}
                          className="mt-1.5"
                          maxLength={4}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Submit Button */}
                <div className="space-y-4">
                  <Button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full h-14 text-lg bg-gradient-hero hover:opacity-90 transition-opacity"
                  >
                    {isProcessing ? (
                      "Processing..."
                    ) : (
                      <>
                        Donate {amount ? `₹${parseInt(amount).toLocaleString()}` : "Now"}
                      </>
                    )}
                  </Button>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Lock className="h-4 w-4" />
                    <span>Your payment is secure and encrypted</span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Payment;
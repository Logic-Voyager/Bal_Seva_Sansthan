import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Impact from "@/components/Impact";
import Programs from "@/components/Programs";
import Volunteer from "@/components/Volunteer";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Impact />
      <Programs />
      <Volunteer/>
      <Footer />
    </div>
  );
};

export default Index;

import { Button } from "@/components/ui/button";
import { Heart, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-hero">
              <Heart className="h-5 w-5 text-white" fill="currentColor" />
            </div>
            <span className="font-heading text-xl font-bold text-foreground">Bal Seva Sansthaan</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About Us
            </a>
            <a href="/#impact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Our Impact
            </a>
            <a href="/#programs" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Programs
            </a>
            {/* <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <Button size="sm" className="bg-gradient-hero hover:opacity-90 transition-opacity">
              Donate Now
            </Button> */}
            <a href="/#volunteer" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Volunteer
            </a>
            <Link to="/donate">
              <Button size="sm" className="bg-gradient-hero hover:opacity-90 transition-opacity">
                Donate Now
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6 text-foreground" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-3 border-t border-border">
            <a
              href="#about"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#impact"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Impact
            </a>
            <a
              href="#programs"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Programs
            </a>
            <a
              href="#contact"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button size="sm" className="w-full bg-gradient-hero hover:opacity-90 transition-opacity">
              Donate Now
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

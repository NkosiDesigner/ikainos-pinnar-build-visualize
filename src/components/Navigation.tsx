import { Button } from "@/components/ui/button";
import { Building2, Calculator, Users, Smartphone } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Building2 className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground">Ikainos Pinnar</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#properties" className="text-foreground hover:text-primary transition-colors">
            Properties
          </a>
          <a href="#ar-builder" className="text-foreground hover:text-primary transition-colors">
            AR Builder
          </a>
          <a href="#calculator" className="text-foreground hover:text-primary transition-colors">
            Cost Calculator
          </a>
          <a href="#directory" className="text-foreground hover:text-primary transition-colors">
            Directory
          </a>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost">Sign In</Button>
          <Button variant="hero">Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
import { Button } from "@/components/ui/button";
import { Building2, Calculator, Users, Smartphone } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Building2 className="h-8 w-8 text-primary" />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-foreground">Ikainos Pinnar</span>
            <span className="text-xs text-muted-foreground">Zimbabwe Property Platform</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#property-managers" className="text-foreground hover:text-primary transition-colors">
            For Managers
          </a>
          <a href="#homeowners" className="text-foreground hover:text-primary transition-colors">
            For Builders
          </a>
          <a href="#ar-flow" className="text-foreground hover:text-primary transition-colors">
            AR Visualization
          </a>
          <a href="#marketplace" className="text-foreground hover:text-primary transition-colors">
            Marketplace
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
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Smartphone, Building, Calculator, Users } from "lucide-react";
import heroImage from "@/assets/hero-ar-construction.jpg";
import ARBuilderModal from "./ARBuilderModal";
import DemoModal from "./DemoModal";

const Hero = () => {
  const [isARBuilderOpen, setIsARBuilderOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <>
      <ARBuilderModal open={isARBuilderOpen} onOpenChange={setIsARBuilderOpen} />
      <DemoModal open={isDemoOpen} onOpenChange={setIsDemoOpen} />
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 to-secondary opacity-90" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-primary-foreground mb-6">
              Transform Zimbabwe's
              <span className="text-primary block">Property Future</span>
            </h1>
            
            <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              Revolutionary AR & AI platform for property management, construction visualization, and tenant leasing in Zimbabwe. Partner with West Prop and Kern Sharpe.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg" 
                className="shadow-glow"
                onClick={() => setIsARBuilderOpen(true)}
              >
                <Smartphone className="mr-2 h-5 w-5" />
                Start AR Builder
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => setIsDemoOpen(true)}
              >
                Watch Demo
              </Button>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="bg-primary/20 p-3 rounded-lg inline-flex mb-2">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <div className="text-primary-foreground font-semibold">Properties</div>
              </div>
              <div className="text-center">
                <div className="bg-primary/20 p-3 rounded-lg inline-flex mb-2">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <div className="text-primary-foreground font-semibold">AR Builder</div>
              </div>
              <div className="text-center">
                <div className="bg-primary/20 p-3 rounded-lg inline-flex mb-2">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <div className="text-primary-foreground font-semibold">Calculator</div>
              </div>
              <div className="text-center">
                <div className="bg-primary/20 p-3 rounded-lg inline-flex mb-2">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-primary-foreground font-semibold">Directory</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="AR construction visualization on smartphone" 
                className="w-full max-w-lg mx-auto rounded-2xl shadow-card"
              />
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold shadow-glow">
                AR Powered
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
    </>
  );
};

export default Hero;
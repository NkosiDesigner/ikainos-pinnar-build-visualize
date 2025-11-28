import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Ruler, Eye, Calculator, Palette, ArrowRight } from "lucide-react";
import ARBuilderModal from "./ARBuilderModal";
import ARBuildingDemo from "./ARBuildingDemo";

const ARVisualizationFlow = () => {
  const [isARBuilderOpen, setIsARBuilderOpen] = useState(false);
  
  const steps = [
    {
      icon: Ruler,
      number: "01",
      title: "Measure Your Stand",
      description: "Use AR to precisely measure your property dimensions on the ground. Get accurate measurements in seconds."
    },
    {
      icon: Eye,
      number: "02",
      title: "Design & Visualize",
      description: "See your future home in 3D AR. Walk through rooms, adjust layouts in real-time, and perfect every detail."
    },
    {
      icon: Calculator,
      number: "03",
      title: "Calculate Costs",
      description: "Get instant USD estimates for materials, labor, and total construction costs. Know your budget upfront."
    },
    {
      icon: Palette,
      number: "04",
      title: "Select Materials",
      description: "Change finishes, colors, and fixtures virtually. See what fits your budget before purchasing."
    }
  ];

  return (
    <>
      <ARBuilderModal open={isARBuilderOpen} onOpenChange={setIsARBuilderOpen} />
      <section id="ar-flow" className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              AR Construction Visualization
            </Badge>
            <h2 className="text-4xl font-bold text-primary-foreground mb-4">
              Transform Your Empty Stand Into a Visual Masterpiece
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Before breaking ground, visualize every detail of your future home with our revolutionary AR technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {steps.map((step, index) => (
              <Card key={index} className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="bg-primary p-4 rounded-2xl flex-shrink-0">
                      <step.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-5xl font-bold text-primary/30">{step.number}</span>
                        <h3 className="text-2xl font-bold text-primary-foreground">{step.title}</h3>
                      </div>
                      <p className="text-primary-foreground/80">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="shadow-glow"
              onClick={() => setIsARBuilderOpen(true)}
            >
              Start AR Visualization
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Interactive Demo */}
          <div className="mt-20">
            <ARBuildingDemo />
          </div>
        </div>
      </section>
    </>
  );
};

export default ARVisualizationFlow;

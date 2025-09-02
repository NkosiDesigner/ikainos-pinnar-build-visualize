import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Camera, Layers, Move3D, Ruler, Palette, Share2 } from "lucide-react";
import ARBuilderModal from "./ARBuilderModal";
import DemoModal from "./DemoModal";

const ARBuilder = () => {
  const [isARBuilderOpen, setIsARBuilderOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const features = [
    {
      icon: Camera,
      title: "AR Camera View",
      description: "Point your phone camera to visualize your house in real-time"
    },
    {
      icon: Layers,
      title: "3D Layers",
      description: "Add walls, floors, roofs and customize every detail"
    },
    {
      icon: Move3D,
      title: "Interactive Placement",
      description: "Drag, rotate and scale objects with intuitive gestures"
    },
    {
      icon: Ruler,
      title: "Precise Measurements",
      description: "Get accurate dimensions with AR measurement tools"
    },
    {
      icon: Palette,
      title: "Material Selection",
      description: "Choose from thousands of materials and finishes"
    },
    {
      icon: Share2,
      title: "Share & Collaborate",
      description: "Share your designs with contractors and family"
    }
  ];

  const steps = [
    "Open the Ikainos Pinnar mobile app",
    "Point your camera at the building site",
    "Start placing walls and structures",
    "Add materials and finishes",
    "Get instant cost calculations",
    "Share with your team"
  ];

  return (
    <>
      <ARBuilderModal open={isARBuilderOpen} onOpenChange={setIsARBuilderOpen} />
      <DemoModal open={isDemoOpen} onOpenChange={setIsDemoOpen} />
    <section id="ar-builder" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            AR Technology
          </Badge>
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">
            Build with Augmented Reality
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Experience the future of construction planning with our revolutionary AR builder. 
            Visualize your dream home before breaking ground.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div className="relative">
              <div className="bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary p-3 rounded-full">
                    <Smartphone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary-foreground">AR Mobile App</h3>
                    <p className="text-primary-foreground/70">Available on iOS & Android</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-primary-foreground font-medium">AR Camera Active</span>
                    </div>
                    <div className="text-primary-foreground/80 text-sm">
                      Real-time house visualization enabled
                    </div>
                  </div>
                  
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-primary-foreground font-medium">AI Assistant Ready</span>
                    </div>
                    <div className="text-primary-foreground/80 text-sm">
                      Intelligent suggestions and cost optimization
                    </div>
                  </div>
                </div>

                <Button 
                  variant="hero" 
                  className="w-full mt-6"
                  onClick={() => setIsARBuilderOpen(true)}
                >
                  Start AR Builder
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary-foreground mb-6">How It Works</h3>
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 flex-1 border border-primary-foreground/20">
                  <p className="text-primary-foreground">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="bg-primary p-3 rounded-full w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-primary-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/80">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Ready to Build Your Dream?
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Join thousands of builders already using our AR technology to create amazing properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => setIsARBuilderOpen(true)}
              >
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
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ARBuilder;
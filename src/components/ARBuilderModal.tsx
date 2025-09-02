import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Camera, 
  Smartphone, 
  Move3D, 
  Layers, 
  Palette, 
  Download,
  CheckCircle,
  ArrowRight
} from "lucide-react";

interface ARBuilderModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ARBuilderModal = ({ open, onOpenChange }: ARBuilderModalProps) => {
  const [step, setStep] = useState(1);
  const [isBuilding, setIsBuilding] = useState(false);
  const [progress, setProgress] = useState(0);

  const steps = [
    { 
      id: 1, 
      title: "Download App", 
      icon: Download,
      description: "Get the Ikainos Pinnar mobile app" 
    },
    { 
      id: 2, 
      title: "Camera Setup", 
      icon: Camera,
      description: "Point camera at your building site" 
    },
    { 
      id: 3, 
      title: "AR Building", 
      icon: Move3D,
      description: "Start placing walls and structures" 
    },
    { 
      id: 4, 
      title: "Customize", 
      icon: Palette,
      description: "Add materials and finishes" 
    }
  ];

  const handleStartBuilding = () => {
    setIsBuilding(true);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsBuilding(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleNextStep = () => {
    if (step < steps.length) {
      setStep(step + 1);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Smartphone className="h-6 w-6 text-primary" />
            AR Builder Experience
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Progress Steps */}
          <div className="flex justify-between items-center">
            {steps.map((stepItem, index) => (
              <div key={stepItem.id} className="flex items-center">
                <div className={`flex items-center gap-2 p-3 rounded-lg transition-all ${
                  step >= stepItem.id 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-secondary text-secondary-foreground'
                }`}>
                  <stepItem.icon className="h-5 w-5" />
                  <span className="font-medium">{stepItem.title}</span>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="h-4 w-4 mx-2 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>

          {/* Current Step Content */}
          <Card className="border-primary/20">
            <CardContent className="p-6">
              {step === 1 && (
                <div className="text-center space-y-4">
                  <div className="bg-primary/10 p-6 rounded-full w-fit mx-auto">
                    <Download className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Download Mobile App</h3>
                  <p className="text-muted-foreground">
                    Get the Ikainos Pinnar app on your smartphone to start building with AR
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Badge className="bg-primary/20 text-primary">iOS Available</Badge>
                    <Badge className="bg-primary/20 text-primary">Android Available</Badge>
                  </div>
                  <Button onClick={handleNextStep} className="mt-4">
                    Continue to Camera Setup
                  </Button>
                </div>
              )}

              {step === 2 && (
                <div className="text-center space-y-4">
                  <div className="bg-primary/10 p-6 rounded-full w-fit mx-auto">
                    <Camera className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Camera Setup</h3>
                  <p className="text-muted-foreground">
                    Point your camera at the ground where you want to build your property
                  </p>
                  <div className="bg-secondary/20 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-green-600 mb-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span>AR Camera Active</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Detecting flat surfaces...</p>
                  </div>
                  <Button onClick={handleNextStep} className="mt-4">
                    Start AR Building
                  </Button>
                </div>
              )}

              {step === 3 && (
                <div className="text-center space-y-4">
                  <div className="bg-primary/10 p-6 rounded-full w-fit mx-auto">
                    <Move3D className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">AR Building Mode</h3>
                  <p className="text-muted-foreground">
                    Place walls, doors, and windows by tapping on the AR view
                  </p>
                  
                  {!isBuilding && progress === 0 && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <Card className="p-4 border-primary/20">
                          <Layers className="h-8 w-8 text-primary mb-2" />
                          <h4 className="font-semibold">Walls</h4>
                          <p className="text-sm text-muted-foreground">Tap to place walls</p>
                        </Card>
                        <Card className="p-4 border-primary/20">
                          <Move3D className="h-8 w-8 text-primary mb-2" />
                          <h4 className="font-semibold">Doors & Windows</h4>
                          <p className="text-sm text-muted-foreground">Add openings</p>
                        </Card>
                      </div>
                      <Button onClick={handleStartBuilding}>
                        Start Building Demo
                      </Button>
                    </div>
                  )}

                  {(isBuilding || progress > 0) && (
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">Building your AR house...</p>
                      <Progress value={progress} className="w-full" />
                      <div className="text-sm text-primary font-medium">
                        {progress < 30 && "Placing foundation..."}
                        {progress >= 30 && progress < 60 && "Adding walls..."}
                        {progress >= 60 && progress < 90 && "Installing roof..."}
                        {progress >= 90 && progress < 100 && "Adding details..."}
                        {progress === 100 && (
                          <div className="flex items-center gap-2 text-green-600">
                            <CheckCircle className="h-4 w-4" />
                            House completed!
                          </div>
                        )}
                      </div>
                      {progress === 100 && (
                        <Button onClick={handleNextStep}>
                          Customize Materials
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              )}

              {step === 4 && (
                <div className="text-center space-y-4">
                  <div className="bg-primary/10 p-6 rounded-full w-fit mx-auto">
                    <Palette className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Customize & Calculate</h3>
                  <p className="text-muted-foreground">
                    Choose materials and get instant cost calculations
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="p-4 border-primary/20 text-left">
                      <h4 className="font-semibold mb-2">Materials Selected</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Brick exterior walls</li>
                        <li>• Concrete foundation</li>
                        <li>• Tile roofing</li>
                        <li>• Hardwood flooring</li>
                      </ul>
                    </Card>
                    <Card className="p-4 border-primary/20 text-left">
                      <h4 className="font-semibold mb-2">Cost Estimate</h4>
                      <div className="text-2xl font-bold text-primary">$145,000</div>
                      <p className="text-sm text-muted-foreground">
                        Based on current material prices
                      </p>
                    </Card>
                  </div>

                  <div className="flex gap-2 justify-center">
                    <Button variant="outline">
                      Download App
                    </Button>
                    <Button onClick={() => onOpenChange(false)}>
                      Get Started
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ARBuilderModal;
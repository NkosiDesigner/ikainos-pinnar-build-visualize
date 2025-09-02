import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Play, 
  Smartphone, 
  Building, 
  Calculator,
  Users,
  CheckCircle,
  ArrowRight
} from "lucide-react";

interface DemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DemoModal = ({ open, onOpenChange }: DemoModalProps) => {
  const demoFeatures = [
    {
      icon: Smartphone,
      title: "AR Visualization",
      description: "See your property in real-time through your phone camera",
      duration: "2 min",
      highlight: true
    },
    {
      icon: Calculator,
      title: "Cost Calculator",
      description: "Get instant material and labor cost estimates",
      duration: "1.5 min",
      highlight: false
    },
    {
      icon: Building,
      title: "Property Management",
      description: "Track multiple properties and their progress",
      duration: "2.5 min",
      highlight: false
    },
    {
      icon: Users,
      title: "Contractor Directory",
      description: "Connect with verified contractors and suppliers",
      duration: "1 min",
      highlight: false
    }
  ];

  const benefits = [
    "Save 40% on construction costs",
    "Reduce project timeline by 30%",
    "Access to 500+ verified contractors",
    "Real-time material price tracking"
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Play className="h-6 w-6 text-primary" />
            Ikainos Pinnar Platform Demo
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Demo Video Placeholder */}
          <div className="relative bg-secondary/20 rounded-lg aspect-video flex items-center justify-center border-2 border-dashed border-primary/30">
            <div className="text-center space-y-4">
              <div className="bg-primary/20 p-6 rounded-full w-fit mx-auto">
                <Play className="h-12 w-12 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Platform Overview</h3>
                <p className="text-muted-foreground">Watch how Ikainos Pinnar revolutionizes property management</p>
                <Badge className="mt-2 bg-primary/20 text-primary">7 min demo</Badge>
              </div>
              <Button variant="hero" size="lg">
                <Play className="mr-2 h-4 w-4" />
                Play Demo Video
              </Button>
            </div>
          </div>

          {/* Demo Features */}
          <div>
            <h3 className="text-xl font-bold mb-4">What You'll See in the Demo</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {demoFeatures.map((feature, index) => (
                <Card key={index} className={`border transition-all hover:shadow-md ${
                  feature.highlight ? 'border-primary/50 bg-primary/5' : 'border-secondary'
                }`}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${
                        feature.highlight ? 'bg-primary text-primary-foreground' : 'bg-secondary'
                      }`}>
                        <feature.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">{feature.title}</h4>
                          <Badge variant="outline" className="text-xs">{feature.duration}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-subtle p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Platform Benefits</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-4 pt-4 border-t">
            <h3 className="text-lg font-semibold">Ready to Transform Your Property Projects?</h3>
            <p className="text-muted-foreground">
              Join thousands of property developers already using Ikainos Pinnar
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="hero" size="lg">
                <Smartphone className="mr-2 h-4 w-4" />
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg">
                <ArrowRight className="mr-2 h-4 w-4" />
                Schedule Live Demo
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Users, FileCheck, DollarSign, Wrench } from "lucide-react";

const ForPropertyManagers = () => {
  const features = [
    {
      icon: Eye,
      title: "AR Property Tours",
      description: "Reduce vacancy periods with immersive AR tours that let tenants explore properties remotely"
    },
    {
      icon: Users,
      title: "AI Tenant Screening",
      description: "Automated background checks and credit scoring in minutes, not days"
    },
    {
      icon: FileCheck,
      title: "Online Lease Signing",
      description: "Digital lease signing and verification with e-signature technology"
    },
    {
      icon: DollarSign,
      title: "Automated Rent Collection",
      description: "Secure automated rent collection in USD with payment tracking"
    },
    {
      icon: Wrench,
      title: "Predictive Maintenance",
      description: "AI-powered alerts for property maintenance before issues escalate"
    }
  ];

  return (
    <section id="property-managers" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            For Property Managers
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Streamline Property Management
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Reduce vacancy periods, automate tenant screening, and manage properties efficiently with AR and AI technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.slice(0, 3).map((feature, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          {features.slice(3).map((feature, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForPropertyManagers;

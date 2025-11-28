import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Ruler, Users, Package, Shield } from "lucide-react";

const ForHomeowners = () => {
  const features = [
    {
      icon: Eye,
      title: "Visualize in AR",
      description: "See your future home in AR before construction begins. Walk through rooms and adjust layouts in real-time."
    },
    {
      icon: Ruler,
      title: "Instant Cost Calculation",
      description: "Measure stands and get instant USD estimates for materials, labor, and total construction costs."
    },
    {
      icon: Users,
      title: "Certified Contractors",
      description: "Browse portfolios with completed projects, certifications, and verified client reviews."
    },
    {
      icon: Package,
      title: "Verified Suppliers",
      description: "Connect with equipment and material suppliers with verified papers and competitive pricing."
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "All payments processed securely through the platform with transparency and protection."
    }
  ];

  return (
    <section id="homeowners" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            For Homeowners & Builders
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Build Your Dream Home
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Visualize, plan, and build with confidence. Connect with certified professionals and get accurate cost estimates.
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

export default ForHomeowners;

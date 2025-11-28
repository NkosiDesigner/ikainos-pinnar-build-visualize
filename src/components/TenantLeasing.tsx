import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, FileText, Brain, Key } from "lucide-react";

const TenantLeasing = () => {
  const steps = [
    {
      icon: Eye,
      title: "Browse Properties",
      description: "Tenants explore listings with immersive AR tours from anywhere in Zimbabwe. View properties without leaving home."
    },
    {
      icon: FileText,
      title: "Submit Documents",
      description: "Upload ID, proof of income, and references digitally. Secure document storage with instant verification."
    },
    {
      icon: Brain,
      title: "AI Screening",
      description: "Automated background checks and credit scoring in minutes, not days. Fast, fair, and transparent process."
    },
    {
      icon: Key,
      title: "Sign & Move In",
      description: "E-sign leases, pay deposits in USD, receive digital keys—all online. Seamless move-in experience."
    }
  ];

  return (
    <section id="tenant-leasing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            Online Tenant Leasing & Verification
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Streamlined Leasing Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From property viewing to move-in, everything happens online. Fast, secure, and transparent for both landlords and tenants.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 text-center">
              <CardHeader>
                <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-subtle p-8 rounded-2xl max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Fast, Fair, and Fully Digital
          </h3>
          <p className="text-muted-foreground mb-6">
            Reduce vacancy periods, eliminate paperwork, and provide a modern experience that attracts quality tenants. All transactions secured in USD with complete transparency.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>Instant Verification</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>Secure Payments</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>Digital Contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>24/7 Access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TenantLeasing;

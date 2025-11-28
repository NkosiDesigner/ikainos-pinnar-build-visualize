import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Package, Award, Star, DollarSign } from "lucide-react";

const MarketplaceShowcase = () => {
  return (
    <section id="marketplace" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            Contractor & Supplier Marketplace
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Connect With Verified Professionals
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Access Zimbabwe's largest network of certified contractors and verified suppliers. Transparency guaranteed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contractors */}
          <Card className="shadow-card hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Verified Contractors</CardTitle>
                  <p className="text-muted-foreground">Trusted professionals, transparent pricing</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Award className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Portfolio & Certifications</h4>
                  <p className="text-sm text-muted-foreground">Browse completed projects with verified certifications and credentials</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Star className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Client Reviews</h4>
                  <p className="text-sm text-muted-foreground">Real reviews from verified clients who completed projects</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <DollarSign className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Platform Fees for Transparency</h4>
                  <p className="text-sm text-muted-foreground">All contractors pay platform fees, ensuring quality and accountability</p>
                </div>
              </div>
              <Button variant="secondary" className="w-full mt-4">
                Browse Contractors
              </Button>
            </CardContent>
          </Card>

          {/* Suppliers */}
          <Card className="shadow-card hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Package className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Certified Suppliers</CardTitle>
                  <p className="text-muted-foreground">Quality materials, competitive pricing</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Award className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Verified Documentation</h4>
                  <p className="text-sm text-muted-foreground">All suppliers have verified papers and proper certifications</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <DollarSign className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Competitive USD Pricing</h4>
                  <p className="text-sm text-muted-foreground">Compare prices across suppliers and get the best deals in USD</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Package className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Equipment & Materials</h4>
                  <p className="text-sm text-muted-foreground">Access complete range of construction materials and equipment</p>
                </div>
              </div>
              <Button variant="secondary" className="w-full mt-4">
                Browse Suppliers
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceShowcase;

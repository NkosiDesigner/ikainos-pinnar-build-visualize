import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, TrendingUp, DollarSign, Package, Building2 } from "lucide-react";
import { useState } from "react";
import calculatorImage from "@/assets/cost-calculator.jpg";

const CostCalculator = () => {
  const [sqft, setSqft] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [quality, setQuality] = useState("");
  const [totalCost, setTotalCost] = useState<number | null>(null);

  const calculateCost = () => {
    if (!sqft || !propertyType || !quality) return;
    
    const baseRates = {
      house: { basic: 150, premium: 250, luxury: 400 },
      apartment: { basic: 120, premium: 200, luxury: 320 }
    };
    
    const rate = baseRates[propertyType as keyof typeof baseRates]?.[quality as keyof typeof baseRates.house] || 150;
    const cost = parseInt(sqft) * rate;
    setTotalCost(cost);
  };

  const materials = [
    { name: "Foundation", cost: totalCost ? (totalCost * 0.15).toLocaleString() : "0", percentage: 15 },
    { name: "Framing", cost: totalCost ? (totalCost * 0.25).toLocaleString() : "0", percentage: 25 },
    { name: "Roofing", cost: totalCost ? (totalCost * 0.12).toLocaleString() : "0", percentage: 12 },
    { name: "Electrical", cost: totalCost ? (totalCost * 0.18).toLocaleString() : "0", percentage: 18 },
    { name: "Plumbing", cost: totalCost ? (totalCost * 0.15).toLocaleString() : "0", percentage: 15 },
    { name: "Finishing", cost: totalCost ? (totalCost * 0.15).toLocaleString() : "0", percentage: 15 }
  ];

  return (
    <section id="calculator" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Smart Cost Calculator
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get accurate cost estimates for your construction project with our AI-powered calculator.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-6 w-6 text-primary" />
                Project Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="sqft">Square Footage</Label>
                <Input
                  id="sqft"
                  placeholder="Enter square footage"
                  value={sqft}
                  onChange={(e) => setSqft(e.target.value)}
                  type="number"
                />
              </div>

              <div className="space-y-2">
                <Label>Property Type</Label>
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Quality Level</Label>
                <Select value={quality} onValueChange={setQuality}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select quality level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic ($150-$120/sqft)</SelectItem>
                    <SelectItem value="premium">Premium ($250-$200/sqft)</SelectItem>
                    <SelectItem value="luxury">Luxury ($400-$320/sqft)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={calculateCost} 
                variant="hero" 
                className="w-full"
                disabled={!sqft || !propertyType || !quality}
              >
                Calculate Total Cost
              </Button>

              {totalCost && (
                <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-foreground">Estimated Total Cost</span>
                  </div>
                  <div className="text-3xl font-bold text-primary">
                    ${totalCost.toLocaleString()}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-6 w-6 text-primary" />
                  Material Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {materials.map((material, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Building2 className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{material.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">${material.cost}</div>
                        <div className="text-sm text-muted-foreground">{material.percentage}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="relative">
              <img 
                src={calculatorImage} 
                alt="Cost calculation dashboard"
                className="w-full rounded-lg shadow-card"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent rounded-lg flex items-end p-6">
                <div className="text-primary-foreground">
                  <h3 className="text-xl font-semibold mb-2">AI-Powered Accuracy</h3>
                  <p className="text-primary-foreground/80">
                    Our calculator uses machine learning to provide the most accurate cost estimates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostCalculator;
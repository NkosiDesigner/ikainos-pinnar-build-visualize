import { Card, CardContent } from "@/components/ui/card";
import { TrendingDown, DollarSign, Zap } from "lucide-react";

const PlatformStatistics = () => {
  const stats = [
    {
      icon: TrendingDown,
      value: "40%",
      label: "Reduction in vacancy periods",
      description: "Through AR tours and online leasing"
    },
    {
      icon: DollarSign,
      value: "35%",
      label: "Cost savings on construction",
      description: "Through accurate AR visualization"
    },
    {
      icon: Zap,
      value: "10x",
      label: "Faster tenant screening",
      description: "With AI-powered verification"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Transform Zimbabwe's Property Future
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            The IkainosPinnar platform addresses Zimbabwe's most pressing property challenges with cutting-edge AR and AI technology. From visualizing construction projects to streamlining tenant leasing and connecting verified contractors, Pinnar delivers comprehensive value across the entire real estate ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 shadow-glow">
              <CardContent className="p-8 text-center">
                <div className="bg-primary p-4 rounded-full w-fit mx-auto mb-6">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-xl font-semibold text-primary-foreground mb-2">{stat.label}</div>
                <p className="text-primary-foreground/70">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8 max-w-3xl mx-auto">
          <p className="text-lg text-primary-foreground/90 leading-relaxed">
            Partner with <span className="font-bold text-primary">West Prop</span> and <span className="font-bold text-primary">Kern Sharpe</span> to revolutionize property management and construction in Zimbabwe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlatformStatistics;

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ForPropertyManagers from "@/components/ForPropertyManagers";
import ForHomeowners from "@/components/ForHomeowners";
import ARVisualizationFlow from "@/components/ARVisualizationFlow";
import PropertyDashboard from "@/components/PropertyDashboard";
import TenantLeasing from "@/components/TenantLeasing";
import MarketplaceShowcase from "@/components/MarketplaceShowcase";
import CostCalculator from "@/components/CostCalculator";
import PlatformStatistics from "@/components/PlatformStatistics";
import Directory from "@/components/Directory";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ForPropertyManagers />
      <ForHomeowners />
      <ARVisualizationFlow />
      <TenantLeasing />
      <MarketplaceShowcase />
      <CostCalculator />
      <PlatformStatistics />
      <Directory />
      
      <footer className="bg-secondary text-secondary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">Ikainos Pinnar</h3>
              <p className="text-secondary-foreground/80">
                Revolutionizing Zimbabwe's property management with AR technology and AI-powered insights.
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-sm text-secondary-foreground/60">Partners:</p>
                <div className="flex flex-col gap-1">
                  <span className="text-primary font-semibold">West Prop</span>
                  <span className="text-primary font-semibold">Kern Sharpe</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li><a href="#property-managers" className="hover:text-primary transition-colors">Property Managers</a></li>
                <li><a href="#homeowners" className="hover:text-primary transition-colors">Homeowners</a></li>
                <li><a href="#ar-flow" className="hover:text-primary transition-colors">AR Visualization</a></li>
                <li><a href="#marketplace" className="hover:text-primary transition-colors">Marketplace</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-secondary-foreground/20 mt-12 pt-8 text-center">
            <p className="text-secondary-foreground/60">
              © 2024 Ikainos Pinnar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

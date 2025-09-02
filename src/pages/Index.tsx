import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PropertyDashboard from "@/components/PropertyDashboard";
import ARBuilder from "@/components/ARBuilder";
import CostCalculator from "@/components/CostCalculator";
import Directory from "@/components/Directory";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <PropertyDashboard />
      <ARBuilder />
      <CostCalculator />
      <Directory />
      
      <footer className="bg-secondary text-secondary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">Ikainos Pinnar</h3>
              <p className="text-secondary-foreground/80">
                Revolutionizing property management with AR technology and AI-powered insights.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li><a href="#properties" className="hover:text-primary transition-colors">Properties</a></li>
                <li><a href="#ar-builder" className="hover:text-primary transition-colors">AR Builder</a></li>
                <li><a href="#calculator" className="hover:text-primary transition-colors">Calculator</a></li>
                <li><a href="#directory" className="hover:text-primary transition-colors">Directory</a></li>
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

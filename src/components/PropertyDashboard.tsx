import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building, Home, MapPin, DollarSign, Eye, Edit } from "lucide-react";
import propertyImage from "@/assets/property-visualization.jpg";

const PropertyDashboard = () => {
  const properties = [
    {
      id: 1,
      name: "Modern Villa Project",
      type: "House",
      location: "Beverly Hills, CA",
      status: "In Progress",
      cost: "$850,000",
      completion: 65,
      image: propertyImage
    },
    {
      id: 2,
      name: "Downtown Apartment",
      type: "Apartment",
      location: "Manhattan, NY",
      status: "Planning",
      cost: "$425,000",
      completion: 15,
      image: propertyImage
    },
    {
      id: 3,
      name: "Suburban House",
      type: "House",
      location: "Austin, TX",
      status: "Completed",
      cost: "$320,000",
      completion: 100,
      image: propertyImage
    }
  ];

  return (
    <section id="properties" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Property Dashboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Manage all your construction projects in one place. Track progress, costs, and timelines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card key={property.id} className="shadow-card hover:shadow-glow transition-all duration-300 group">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={property.image} 
                    alt={property.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge 
                    className={`absolute top-4 right-4 ${
                      property.status === 'Completed' ? 'bg-green-500' :
                      property.status === 'In Progress' ? 'bg-primary' :
                      'bg-yellow-500'
                    }`}
                  >
                    {property.status}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2 flex items-center gap-2">
                  {property.type === 'House' ? 
                    <Home className="h-5 w-5 text-primary" /> : 
                    <Building className="h-5 w-5 text-primary" />
                  }
                  {property.name}
                </CardTitle>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {property.location}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <DollarSign className="h-4 w-4" />
                    {property.cost}
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress</span>
                    <span>{property.completion}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${property.completion}%` }}
                    />
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </Button>
                  <Button variant="secondary" size="sm" className="flex-1">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            <Building className="mr-2 h-5 w-5" />
            Add New Property
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PropertyDashboard;
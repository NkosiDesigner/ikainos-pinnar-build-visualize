import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Star, MapPin, Phone, Search, Filter } from "lucide-react";
import { useState } from "react";

const Directory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  const contractors = [
    {
      id: 1,
      name: "Elite Construction Co.",
      type: "General Contractor",
      rating: 4.9,
      reviews: 156,
      location: "Los Angeles, CA",
      phone: "(555) 123-4567",
      specialties: ["Residential", "Commercial", "Renovation"],
      price: "$$$"
    },
    {
      id: 2,
      name: "Modern Builders Inc.",
      type: "Home Builder",
      rating: 4.7,
      reviews: 89,
      location: "San Francisco, CA",
      phone: "(555) 234-5678",
      specialties: ["Custom Homes", "Green Building", "Smart Homes"],
      price: "$$$$"
    },
    {
      id: 3,
      name: "Urban Renovations",
      type: "Renovation Specialist",
      rating: 4.8,
      reviews: 134,
      location: "New York, NY",
      phone: "(555) 345-6789",
      specialties: ["Apartment Renovation", "Kitchen", "Bathroom"],
      price: "$$"
    }
  ];

  const retailers = [
    {
      id: 1,
      name: "BuildMart Supplies",
      type: "Building Materials",
      rating: 4.6,
      reviews: 203,
      location: "Multiple Locations",
      phone: "(555) 456-7890",
      specialties: ["Lumber", "Hardware", "Tools"],
      discount: "15% off bulk orders"
    },
    {
      id: 2,
      name: "Premium Stone & Tile",
      type: "Flooring Specialist",
      rating: 4.9,
      reviews: 91,
      location: "Miami, FL",
      phone: "(555) 567-8901",
      specialties: ["Natural Stone", "Ceramic Tile", "Luxury Vinyl"],
      discount: "10% off first order"
    },
    {
      id: 3,
      name: "EcoFriendly Materials",
      type: "Sustainable Supplies",
      rating: 4.7,
      reviews: 67,
      location: "Portland, OR",
      phone: "(555) 678-9012",
      specialties: ["Recycled Materials", "Solar Panels", "Insulation"],
      discount: "20% off green materials"
    }
  ];

  const allProviders = [
    ...contractors.map(c => ({ ...c, category: 'contractor' })),
    ...retailers.map(r => ({ ...r, category: 'retailer' }))
  ];

  const filteredProviders = allProviders.filter(provider => {
    const matchesSearch = provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         provider.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = filterType === 'all' || provider.category === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <section id="directory" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Contractor & Retailer Directory
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with trusted contractors and find the best material suppliers for your project.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search contractors or retailers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-full md:w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Providers</SelectItem>
              <SelectItem value="contractor">Contractors</SelectItem>
              <SelectItem value="retailer">Retailers</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProviders.map((provider) => (
            <Card key={`${provider.category}-${provider.id}`} className="shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant={provider.category === 'contractor' ? 'default' : 'secondary'}>
                    {provider.category === 'contractor' ? 'Contractor' : 'Retailer'}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{provider.rating}</span>
                    <span className="text-muted-foreground">({provider.reviews})</span>
                  </div>
                </div>
                <CardTitle className="text-xl">{provider.name}</CardTitle>
                <p className="text-muted-foreground">{provider.type}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {provider.location}
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  {provider.phone}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {provider.specialties.map((specialty, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
                
                {provider.category === 'contractor' && (
                  <div className="text-right text-muted-foreground">
                    Price Range: <span className="font-semibold">{(provider as any).price}</span>
                  </div>
                )}
                
                {provider.category === 'retailer' && (
                  <div className="bg-primary/10 p-3 rounded-lg border border-primary/20">
                    <div className="text-primary font-semibold text-sm">
                      Special Offer: {(provider as any).discount}
                    </div>
                  </div>
                )}
                
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Phone className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                  <Button variant="secondary" size="sm" className="flex-1">
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            <Users className="mr-2 h-5 w-5" />
            Join Our Network
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Directory;
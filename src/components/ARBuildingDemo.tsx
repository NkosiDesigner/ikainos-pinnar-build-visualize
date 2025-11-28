import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RotateCw, Maximize, Grid3x3, Palette, DollarSign } from "lucide-react";

const ARBuildingDemo = () => {
  const [rotation, setRotation] = useState(0);
  const [buildingHeight, setBuildingHeight] = useState(2);
  const [roofType, setRoofType] = useState<"flat" | "gabled" | "hipped">("gabled");
  const [wallColor, setWallColor] = useState("#e8d4b8");
  const [roofColor, setRoofColor] = useState("#8b4513");

  const calculateCost = () => {
    const baseCost = 50000;
    const heightMultiplier = buildingHeight * 15000;
    const roofCost = roofType === "flat" ? 5000 : roofType === "gabled" ? 8000 : 10000;
    return baseCost + heightMultiplier + roofCost;
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
          Interactive AR Demo
        </Badge>
        <h2 className="text-3xl font-bold text-foreground mb-2">
          Visualize Your Dream Home in 3D
        </h2>
        <p className="text-muted-foreground">
          Customize and see real-time cost estimates
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* 3D Building Visualization */}
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">3D Preview</h3>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setRotation((prev) => prev + 45)}
              >
                <RotateCw className="h-4 w-4 mr-2" />
                Rotate
              </Button>
            </div>

            <div className="relative bg-gradient-to-b from-sky-200 to-green-100 rounded-lg overflow-hidden aspect-square flex items-end justify-center p-8">
              {/* Ground */}
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-green-600 to-green-400" />
              
              {/* Building Container */}
              <div
                className="relative transition-transform duration-700 ease-out"
                style={{
                  transform: `perspective(1000px) rotateY(${rotation}deg) rotateX(5deg)`,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Building Base */}
                <div
                  className="relative"
                  style={{
                    width: "200px",
                    height: `${buildingHeight * 80}px`,
                    backgroundColor: wallColor,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Windows */}
                  {Array.from({ length: buildingHeight }).map((_, floor) => (
                    <div key={floor} className="absolute left-0 right-0 flex justify-around px-4"
                      style={{ top: `${floor * (100 / buildingHeight)}%` }}>
                      <div className="w-8 h-10 bg-sky-400 border-2 border-gray-600" />
                      <div className="w-8 h-10 bg-sky-400 border-2 border-gray-600" />
                      <div className="w-8 h-10 bg-sky-400 border-2 border-gray-600" />
                    </div>
                  ))}
                  
                  {/* Door */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-16 bg-amber-900 border-2 border-gray-600" />
                </div>

                {/* Roof */}
                <div
                  className="absolute -top-8 left-1/2 -translate-x-1/2"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {roofType === "gabled" && (
                    <div
                      style={{
                        width: "0",
                        height: "0",
                        borderLeft: "120px solid transparent",
                        borderRight: "120px solid transparent",
                        borderBottom: `60px solid ${roofColor}`,
                      }}
                    />
                  )}
                  {roofType === "flat" && (
                    <div
                      style={{
                        width: "240px",
                        height: "20px",
                        backgroundColor: roofColor,
                        boxShadow: "0 -4px 8px rgba(0,0,0,0.2)",
                      }}
                    />
                  )}
                  {roofType === "hipped" && (
                    <div className="relative" style={{ width: "240px", height: "60px" }}>
                      <div
                        style={{
                          position: "absolute",
                          top: "0",
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: "0",
                          height: "0",
                          borderLeft: "120px solid transparent",
                          borderRight: "120px solid transparent",
                          borderBottom: `60px solid ${roofColor}`,
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Controls */}
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <Tabs defaultValue="structure" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="structure">
                  <Grid3x3 className="h-4 w-4 mr-2" />
                  Structure
                </TabsTrigger>
                <TabsTrigger value="design">
                  <Palette className="h-4 w-4 mr-2" />
                  Design
                </TabsTrigger>
                <TabsTrigger value="cost">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Cost
                </TabsTrigger>
              </TabsList>

              <TabsContent value="structure" className="space-y-6 pt-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Building Height: {buildingHeight} {buildingHeight === 1 ? "Floor" : "Floors"}
                  </label>
                  <Slider
                    value={[buildingHeight]}
                    onValueChange={(v) => setBuildingHeight(v[0])}
                    min={1}
                    max={4}
                    step={1}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Roof Type</label>
                  <div className="grid grid-cols-3 gap-2">
                    {(["flat", "gabled", "hipped"] as const).map((type) => (
                      <Button
                        key={type}
                        variant={roofType === type ? "default" : "outline"}
                        onClick={() => setRoofType(type)}
                        className="capitalize"
                      >
                        {type}
                      </Button>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="design" className="space-y-6 pt-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Wall Color</label>
                  <div className="grid grid-cols-5 gap-2">
                    {["#e8d4b8", "#f5f5dc", "#d3d3d3", "#ffa07a", "#98fb98"].map((color) => (
                      <button
                        key={color}
                        onClick={() => setWallColor(color)}
                        className={`h-12 rounded-md border-2 transition-all ${
                          wallColor === color ? "border-primary scale-110" : "border-border"
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Roof Color</label>
                  <div className="grid grid-cols-5 gap-2">
                    {["#8b4513", "#696969", "#2f4f4f", "#8b0000", "#191970"].map((color) => (
                      <button
                        key={color}
                        onClick={() => setRoofColor(color)}
                        className={`h-12 rounded-md border-2 transition-all ${
                          roofColor === color ? "border-primary scale-110" : "border-border"
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="cost" className="space-y-6 pt-4">
                <div className="bg-gradient-primary p-6 rounded-lg text-center">
                  <div className="text-primary-foreground/80 text-sm mb-2">Estimated Cost</div>
                  <div className="text-4xl font-bold text-primary-foreground">
                    ${calculateCost().toLocaleString()}
                  </div>
                  <div className="text-primary-foreground/80 text-xs mt-2">USD</div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Base Construction</span>
                    <span className="font-medium">$50,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      Additional Floors ({buildingHeight - 1})
                    </span>
                    <span className="font-medium">${((buildingHeight - 1) * 15000).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Roof ({roofType})</span>
                    <span className="font-medium">
                      ${roofType === "flat" ? "5,000" : roofType === "gabled" ? "8,000" : "10,000"}
                    </span>
                  </div>
                </div>

                <Button className="w-full" variant="hero" size="lg">
                  <Maximize className="mr-2 h-5 w-5" />
                  View in AR
                </Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ARBuildingDemo;

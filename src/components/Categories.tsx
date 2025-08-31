import { Camera, Wrench, Tent, Music, Bike, Laptop, Car, Home } from "lucide-react";
import { Card } from "@/components/ui/card";

const Categories = () => {
  const categories = [
    {
      icon: Camera,
      name: "Photography",
      count: "2.5K+ items",
      color: "from-bright-blue to-light-blue"
    },
    {
      icon: Wrench,
      name: "Tools & Equipment",
      count: "3.2K+ items",
      color: "from-burgundy to-blue-gray"
    },
    {
      icon: Tent,
      name: "Outdoor & Camping",
      count: "1.8K+ items",
      color: "from-light-blue to-bright-blue"
    },
    {
      icon: Music,
      name: "Party & Events",
      count: "1.5K+ items",
      color: "from-warm-cream to-burgundy"
    },
    {
      icon: Bike,
      name: "Sports & Recreation",
      count: "2.1K+ items",
      color: "from-bright-blue to-warm-cream"
    },
    {
      icon: Laptop,
      name: "Electronics",
      count: "1.9K+ items",
      color: "from-burgundy to-light-blue"
    },
    {
      icon: Car,
      name: "Vehicles",
      count: "800+ items",
      color: "from-light-blue to-warm-cream"
    },
    {
      icon: Home,
      name: "Home & Garden",
      count: "2.8K+ items",
      color: "from-warm-cream to-bright-blue"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Browse Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find exactly what you need from our diverse range of rental categories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.name}
                className="card-hover bg-card border-0 p-6 text-center cursor-pointer group animate-bounce-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count}</p>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Can't find what you're looking for?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Post a request and let the community know what you need!
            </p>
            <button className="bg-white text-primary font-semibold px-8 py-3 rounded-full hover:bg-white/90 transition-colors">
              Post a Request
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
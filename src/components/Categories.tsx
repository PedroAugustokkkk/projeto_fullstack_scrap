import { Camera, Wrench, Tent, Music, Bike, Laptop, Car, Home } from "lucide-react";
import { Card } from "@/components/ui/card";

const Categories = () => {
  const categories = [
    {
      icon: Camera,
      name: "Photography",
      count: "2.5K+ items",
      color: "from-magenta to-lavender"
    },
    {
      icon: Wrench,
      name: "Tools & Equipment",
      count: "3.2K+ items",
      color: "from-olive to-cream"
    },
    {
      icon: Tent,
      name: "Outdoor & Camping",
      count: "1.8K+ items",
      color: "from-lavender to-magenta"
    },
    {
      icon: Music,
      name: "Party & Events",
      count: "1.5K+ items",
      color: "from-cream to-olive"
    },
    {
      icon: Bike,
      name: "Sports & Recreation",
      count: "2.1K+ items",
      color: "from-magenta to-cream"
    },
    {
      icon: Laptop,
      name: "Electronics",
      count: "1.9K+ items",
      color: "from-olive to-lavender"
    },
    {
      icon: Car,
      name: "Vehicles",
      count: "800+ items",
      color: "from-lavender to-cream"
    },
    {
      icon: Home,
      name: "Home & Garden",
      count: "2.8K+ items",
      color: "from-cream to-magenta"
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
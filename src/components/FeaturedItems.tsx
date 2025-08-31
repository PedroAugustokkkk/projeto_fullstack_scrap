import { Heart, Star, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import cameraKit from "@/assets/camera-kit.jpg";
import campingTent from "@/assets/camping-tent.jpg";
import drillSet from "@/assets/drill-set.jpg";

const FeaturedItems = () => {
  const featuredItems = [
    {
      id: 1,
      title: "Professional Camera Kit",
      price: "$45",
      period: "per day",
      rating: 4.9,
      reviews: 127,
      location: "Brooklyn, NY",
      image: cameraKit,
      owner: "Sarah M.",
      category: "Photography"
    },
    {
      id: 2,
      title: "Camping Tent (4-Person)",
      price: "$25",
      period: "per day",
      rating: 4.8,
      reviews: 89,
      location: "Portland, OR",
      image: campingTent,
      owner: "Mike J.",
      category: "Outdoor"
    },
    {
      id: 3,
      title: "Electric Drill Set",
      price: "$15",
      period: "per day",
      rating: 4.7,
      reviews: 156,
      location: "Austin, TX",
      image: drillSet,
      owner: "David L.",
      category: "Tools"
    },
    {
      id: 4,
      title: "DJ Equipment Package",
      price: "$120",
      period: "per day",
      rating: 5.0,
      reviews: 45,
      location: "Miami, FL",
      image: "/placeholder.svg",
      owner: "Elena R.",
      category: "Party"
    },
    {
      id: 5,
      title: "Mountain Bike",
      price: "$35",
      period: "per day",
      rating: 4.6,
      reviews: 78,
      location: "Denver, CO",
      image: "/placeholder.svg",
      owner: "Tom H.",
      category: "Sports"
    },
    {
      id: 6,
      title: "Projector & Screen",
      price: "$40",
      period: "per day",
      rating: 4.9,
      reviews: 112,
      location: "Seattle, WA",
      image: "/placeholder.svg",
      owner: "Lisa K.",
      category: "Electronics"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Items
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover amazing items available for rent from people in your community
          </p>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="card-hover bg-card border-0 overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] bg-gradient-secondary overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
                >
                  <Heart className="h-4 w-4" />
                </Button>
                <div className="absolute top-3 left-3">
                  <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-lg text-card-foreground">{item.title}</h3>
                  <div className="text-right">
                    <div className="font-bold text-primary">{item.price}</div>
                    <div className="text-sm text-muted-foreground">{item.period}</div>
                  </div>
                </div>

                {/* Rating & Reviews */}
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium text-sm">{item.rating}</span>
                  </div>
                  <span className="text-muted-foreground text-sm">({item.reviews} reviews)</span>
                </div>

                {/* Location & Owner */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{item.location}</span>
                  </div>
                  <span>by {item.owner}</span>
                </div>

                {/* Action Button */}
                <Button className="w-full btn-hero">
                  Rent Now
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8 py-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Items
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;
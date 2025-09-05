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
      title: "Kit Profissional de Câmera",
      price: "R$45",
      period: "por dia",
      rating: 4.9,
      reviews: 127,
      location: "Salvador, BA",
      image: cameraKit,
      owner: "Sara M.",
      category: "Fotografia"
    },
    {
      id: 2,
      title: "Barraca de Camping (para 4 pessoas)",
      price: "R$25",
      period: "por dia",
      rating: 4.8,
      reviews: 89,
      location: "São Paulo, SP",
      image: campingTent,
      owner: "Miguel T.",
      category: "Ar-Livre"
    },
    {
      id: 3,
      title: "Kit Furadeira Elétrica",
      price: "R$15",
      period: "por dia",
      rating: 4.7,
      reviews: 156,
      location: "Belo Horizonte, BH",
      image: drillSet,
      owner: "Davi L.",
      category: "Ferramentas"
    },
    {
      id: 4,
      title: "Pacote de Equipamentos de DJ",
      price: "R$120",
      period: "por dia",
      rating: 5.0,
      reviews: 45,
      location: "Rio de Janeiro, RJ",
      image: "/placeholder.svg",
      owner: "Elena R.",
      category: "Festa"
    },
    {
      id: 5,
      title: "Bicicleta de Trilha",
      price: "R$35",
      period: "por dia",
      rating: 4.6,
      reviews: 78,
      location: "Florianópolis, SC",
      image: "/placeholder.svg",
      owner: "José H.",
      category: "Esportes"
    },
    {
      id: 6,
      title: "Datashow (Projetos)",
      price: "R$40",
      period: "por dia",
      rating: 4.9,
      reviews: 112,
      location: "Fortaleza, CE",
      image: "/placeholder.svg",
      owner: "Lisa K.",
      category: "Eletrônicos"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Itens Disponíveis
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra itens incríveis para alugar perto de você. Compartilhe, economize e viva mais com SCRAP.
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
                  <span className="text-muted-foreground text-sm">({item.reviews} avaliações)</span>
                </div>

                {/* Location & Owner */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{item.location}</span>
                  </div>
                  <span>por {item.owner}</span>
                </div>

                {/* Action Button */}
                <Button className="w-full btn-hero">
                  Alugue Agora
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8 py-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Veja Todos Os Itens
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;
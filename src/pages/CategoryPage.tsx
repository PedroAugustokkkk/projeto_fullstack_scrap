import { useState } from "react";
import { useParams } from "react-router-dom";
import { Filter, Search, MapPin, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const CategoryPage = () => {
  const { category } = useParams();
  const [sortBy, setSortBy] = useState("relevance");
  
  // Sample items for demonstration
  const items = [
    {
      id: 1,
      title: "Furadeira Bosch Professional",
      price: 25,
      location: "Vila Madalena, SP",
      rating: 4.8,
      reviews: 42,
      image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=300&h=200&fit=crop",
      owner: "Carlos M."
    },
    {
      id: 2,
      title: "Canon EOS R5 + Lentes",
      price: 120,
      location: "Ipanema, RJ", 
      rating: 4.9,
      reviews: 28,
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=300&h=200&fit=crop",
      owner: "Ana S."
    },
    {
      id: 3,
      title: "Barraca Coleman 4 Pessoas",
      price: 40,
      location: "Savassi, BH",
      rating: 4.7,
      reviews: 15,
      image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=300&h=200&fit=crop",
      owner: "Roberto L."
    },
    {
      id: 4,
      title: "MacBook Pro M2",
      price: 80,
      location: "Asa Norte, DF",
      rating: 5.0,
      reviews: 8,
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=200&fit=crop",
      owner: "Marina P."
    }
  ];

  const categoryNames: Record<string, string> = {
    "photography": "Fotografia",
    "tools": "Ferramentas e Equipamentos", 
    "camping": "Ar-Livre e Acampamento",
    "events": "Festa & Eventos",
    "sports": "Esportes e Recreação",
    "electronics": "Eletrônicos",
    "vehicles": "Veículos",
    "home": "Casa e Jardim"
  };

  const categoryName = categoryNames[category || ""] || "Categoria";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {categoryName}
          </h1>
          <p className="text-xl text-muted-foreground">
            {items.length} itens disponíveis para aluguel
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder={`Buscar em ${categoryName}`}
              className="pl-10"
            />
          </div>
          
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Relevância</SelectItem>
              <SelectItem value="price-low">Menor preço</SelectItem>
              <SelectItem value="price-high">Maior preço</SelectItem>
              <SelectItem value="rating">Melhor avaliado</SelectItem>
              <SelectItem value="distance">Mais próximo</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-glow transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">{item.title}</h3>
                
                <div className="flex items-center gap-1 mb-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{item.rating}</span>
                  <span className="text-sm text-muted-foreground">({item.reviews})</span>
                </div>
                
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  {item.location}
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-primary">R$ {item.price}</span>
                    <span className="text-sm text-muted-foreground">/dia</span>
                  </div>
                  <Badge variant="secondary">{item.owner}</Badge>
                </div>
                
                <Button className="w-full mt-3 btn-hero">
                  Ver Detalhes
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Carregar Mais Itens
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;
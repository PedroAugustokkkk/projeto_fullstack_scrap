import { useState } from "react";
import { Search, Filter, MapPin, Calendar, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "Todos",
    "Eletrônicos",
    "Ferramentas",
    "Esportes",
    "Casa & Jardim",
    "Veículos",
    "Música",
    "Fotografia"
  ];

  const mockItems = [
    {
      id: 1,
      title: "Furadeira Profissional Bosch",
      price: "R$ 25/dia",
      location: "São Paulo, SP",
      rating: 4.8,
      image: "/placeholder.svg",
      category: "Ferramentas"
    },
    {
      id: 2,
      title: "Câmera DSLR Canon EOS",
      price: "R$ 80/dia",
      location: "Rio de Janeiro, RJ",
      rating: 4.9,
      image: "/placeholder.svg",
      category: "Fotografia"
    },
    {
      id: 3,
      title: "Barraca de Camping 4 Pessoas",
      price: "R$ 35/dia",
      location: "Belo Horizonte, MG",
      rating: 4.7,
      image: "/placeholder.svg",
      category: "Esportes"
    },
    {
      id: 4,
      title: "Notebook Gamer Alto Desempenho",
      price: "R$ 60/dia",
      location: "Porto Alegre, RS",
      rating: 4.6,
      image: "/placeholder.svg",
      category: "Eletrônicos"
    },
    {
      id: 5,
      title: "Guitarra Elétrica Fender",
      price: "R$ 45/dia",
      location: "Salvador, BA",
      rating: 4.8,
      image: "/placeholder.svg",
      category: "Música"
    },
    {
      id: 6,
      title: "Aspirador de Pó Robô",
      price: "R$ 30/dia",
      location: "Brasília, DF",
      rating: 4.5,
      image: "/placeholder.svg",
      category: "Casa & Jardim"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Encontre Qualquer Coisa
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Milhares de itens disponíveis para aluguel perto de você
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row gap-4 p-6 bg-card rounded-2xl shadow-card">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="O que você está procurando?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-lg border-none bg-background/50"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Localização"
                className="pl-10 h-12 min-w-[200px] border-none bg-background/50"
              />
            </div>
            <Button size="lg" className="btn-hero h-12 px-8">
              <Search className="h-5 w-5 mr-2" />
              Buscar
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
            <Button variant="outline" size="sm">
              <Calendar className="h-4 w-4 mr-2" />
              Datas
            </Button>
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category.toLowerCase() ? "default" : "outline"}
                  className="cursor-pointer hover:bg-accent/20 transition-colors"
                  onClick={() => setSelectedCategory(category.toLowerCase())}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <CardHeader className="p-0">
                <div className="aspect-video bg-gradient-subtle rounded-t-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-6xl opacity-20">📦</span>
                  </div>
                  <Badge className="absolute top-3 left-3 bg-accent/90 text-accent-foreground">
                    {item.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg mb-2 line-clamp-2">{item.title}</CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4" />
                  {item.location}
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{item.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">{item.price}</span>
                  <Button size="sm" className="btn-hero">
                    Ver Detalhes
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Carregar Mais Itens
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SearchPage;
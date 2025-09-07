import { useState } from "react";
import { Laptop, Wrench, Bike, Home, Car, Music, Camera, Package } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CategoriesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    {
      id: "electronics",
      name: "Eletrônicos",
      icon: Laptop,
      count: 2340,
      color: "from-blue-500 to-purple-600",
      description: "Notebooks, tablets, smartphones, TVs e muito mais",
      popularItems: ["MacBook Pro", "iPhone 14", "PlayStation 5", "Nintendo Switch"]
    },
    {
      id: "tools",
      name: "Ferramentas",
      icon: Wrench,
      count: 1890,
      color: "from-orange-500 to-red-600",
      description: "Furadeiras, serras, chaves de fenda e equipamentos profissionais",
      popularItems: ["Furadeira Bosch", "Serra Circular", "Parafusadeira", "Martelo Demolidor"]
    },
    {
      id: "sports",
      name: "Esportes",
      icon: Bike,
      count: 1560,
      color: "from-green-500 to-teal-600",
      description: "Bicicletas, equipamentos de camping, pranchas e acessórios esportivos",
      popularItems: ["Mountain Bike", "Barraca 4 Pessoas", "Prancha de Surf", "Kit Mergulho"]
    },
    {
      id: "home",
      name: "Casa & Jardim",
      icon: Home,
      count: 980,
      color: "from-purple-500 to-pink-600",
      description: "Eletrodomésticos, móveis, decoração e equipamentos de jardinagem",
      popularItems: ["Aspirador Robô", "Cortador de Grama", "Máquina de Lavar", "Mesa de Jantar"]
    },
    {
      id: "vehicles",
      name: "Veículos",
      icon: Car,
      count: 750,
      color: "from-gray-500 to-slate-600",
      description: "Carros, motos, bicicletas elétricas e equipamentos de transporte",
      popularItems: ["Civic 2022", "Yamaha MT-03", "Bike Elétrica", "Patinete Elétrico"]
    },
    {
      id: "music",
      name: "Música",
      icon: Music,
      count: 430,
      color: "from-pink-500 to-rose-600",
      description: "Instrumentos musicais, equipamentos de som e acessórios",
      popularItems: ["Guitarra Fender", "Teclado Yamaha", "Bateria Acústica", "Mesa de Som"]
    },
    {
      id: "photography",
      name: "Fotografia",
      icon: Camera,
      count: 620,
      color: "from-cyan-500 to-blue-600",
      description: "Câmeras, lentes, tripés e equipamentos de iluminação",
      popularItems: ["Canon EOS R5", "Lente 70-200mm", "Tripé Profissional", "Flash Externo"]
    },
    {
      id: "others",
      name: "Outros",
      icon: Package,
      count: 890,
      color: "from-indigo-500 to-purple-600",
      description: "Itens diversos, colecionáveis e equipamentos especializados",
      popularItems: ["Projetor 4K", "Máquina de Costura", "Kit Jardinagem", "Equipamento DJ"]
    }
  ];

  const featuredCategories = [
    {
      title: "Mais Procurados",
      items: ["MacBook Pro", "PlayStation 5", "Furadeira Bosch", "Mountain Bike"]
    },
    {
      title: "Recém Adicionados",
      items: ["iPhone 15", "Aspirador Robô", "Guitarra Gibson", "Drone DJI"]
    },
    {
      title: "Melhores Preços",
      items: ["Tablet Samsung", "Serra Circular", "Barraca Camping", "Teclado Gamer"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Explore Todas as Categorias
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Encontre exatamente o que você precisa entre milhares de itens organizados por categoria
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">8,000+</div>
              <div className="text-sm text-muted-foreground">Itens disponíveis</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">150+</div>
              <div className="text-sm text-muted-foreground">Cidades atendidas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-bright-blue">95%</div>
              <div className="text-sm text-muted-foreground">Satisfação</div>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={category.id}
                className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 cursor-pointer relative overflow-hidden"
                onClick={() => setSelectedCategory(category.id)}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                
                <CardHeader className="text-center relative z-10">
                  <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{category.name}</CardTitle>
                  <Badge variant="secondary" className="mx-auto">
                    {category.count.toLocaleString()} itens
                  </Badge>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <p className="text-sm text-muted-foreground mb-4 text-center">
                    {category.description}
                  </p>
                  
                  {/* Popular Items */}
                  <div className="space-y-1">
                    <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Mais Populares:
                    </h4>
                    {category.popularItems.slice(0, 3).map((item) => (
                      <div key={item} className="text-sm text-foreground">
                        • {item}
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full mt-4 group-hover:bg-accent/20"
                  >
                    Explorar Categoria
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredCategories.map((section) => (
            <Card key={section.title}>
              <CardHeader>
                <CardTitle className="text-lg">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {section.items.map((item) => (
                    <div key={item} className="flex items-center justify-between p-2 rounded-lg hover:bg-accent/10 cursor-pointer transition-colors">
                      <span className="text-sm">{item}</span>
                      <Badge variant="outline" className="text-xs">
                        A partir de R$ 25/dia
                      </Badge>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Ver Todos
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Não encontrou o que procura?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Nossa comunidade está sempre crescendo. Cadastre-se para receber notificações quando 
            novos itens da sua categoria de interesse estiverem disponíveis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero">
              Criar Alerta de Categoria
            </Button>
            <Button variant="outline">
              Sugerir Nova Categoria
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CategoriesPage;
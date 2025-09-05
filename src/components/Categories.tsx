import { Camera, Wrench, Tent, Music, Bike, Laptop, Car, Home } from "lucide-react";
import { Card } from "@/components/ui/card";

const Categories = () => {
  const categories = [
    {
      icon: Camera,
      name: "Fotografia",
      count: "1 item",
      color: "from-bright-blue to-light-blue"
    },
    {
      icon: Wrench,
      name: "Ferramentas e Equipamentos",
      count: "1 item",
      color: "from-burgundy to-blue-gray"
    },
    {
      icon: Tent,
      name: "Ar-Livre e Acampamento",
      count: "1 item",
      color: "from-light-blue to-bright-blue"
    },
    {
      icon: Music,
      name: "Festa & Eventos",
      count: "1 item",
      color: "from-warm-cream to-burgundy"
    },
    {
      icon: Bike,
      name: "Esportes e Recreação",
      count: "1 item",
      color: "from-bright-blue to-warm-cream"
    },
    {
      icon: Laptop,
      name: "Eletrônicos",
      count: "1 item",
      color: "from-burgundy to-light-blue"
    },
    {
      icon: Car,
      name: "Veículos",
      count: "1 item",
      color: "from-light-blue to-warm-cream"
    },
    {
      icon: Home,
      name: "Casa e Jardim",
      count: "1 item",
      color: "from-warm-cream to-bright-blue"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Navegue Por Categorias
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Encontre rapidamente o que você precisa navegando por nossas categorias populares.
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
              Não encontrou o que procurava?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Publique uma solicitação e deixe a comunidade ajudar você a encontrar o item perfeito.
            </p>
            <button className="bg-white text-primary font-semibold px-8 py-3 rounded-full hover:bg-white/90 transition-colors">
              Poste Um Pedido
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
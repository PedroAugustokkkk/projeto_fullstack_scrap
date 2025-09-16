import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const SuccessStoriesPage = () => {
  const stories = [
    {
      name: "Carlos Mendoza",
      location: "São Paulo, SP",
      earnings: "R$ 1.200",
      period: "por mês",
      story: "Comecei listando apenas minha furadeira Bosch. Em 6 meses já tinha 8 ferramentas na plataforma e estava ganhando mais de mil reais por mês! A SCRAP mudou minha vida financeira.",
      rating: 5,
      items: "Ferramentas elétricas"
    },
    {
      name: "Ana Santos",
      location: "Rio de Janeiro, RJ", 
      earnings: "R$ 800",
      period: "por mês",
      story: "Como fotógrafa freelancer, sempre tive equipamentos caros parados. Na SCRAP consegui rentabilizar tudo: câmeras, lentes, tripés. É uma renda passiva incrível!",
      rating: 5,
      items: "Equipamentos fotográficos"
    },
    {
      name: "Roberto Lima",
      location: "Belo Horizonte, MG",
      earnings: "R$ 500",
      period: "por mês",
      story: "Meu kit de camping só era usado nas férias. Agora ele me rende R$ 500 todo mês ajudando outras famílias a aproveitarem a natureza. Todo mundo sai ganhando!",
      rating: 5,
      items: "Equipamentos de camping"
    },
    {
      name: "Marina Pereira",
      location: "Brasília, DF",
      earnings: "R$ 600",
      period: "por mês",
      story: "Como designer, tenho vários eletrônicos. Meu MacBook e iPad geravam zero quando eu não estava usando. Agora são uma fonte de renda constante!",
      rating: 5,
      items: "Eletrônicos"
    },
    {
      name: "João Silva",
      location: "Porto Alegre, RS",
      earnings: "R$ 400",
      period: "por mês",
      story: "Minha bicicleta elétrica custou R$ 4.000 e ficava parada na garagem. Em um ano na SCRAP ela já se pagou completamente e continua gerando lucro!",
      rating: 5,
      items: "Bicicleta elétrica"
    },
    {
      name: "Lucia Oliveira",
      location: "Salvador, BA",
      earnings: "R$ 700",
      period: "por mês",
      story: "Transformei minha paixão por jardinagem em negócio. Alugo cortador de grama, aparador, ferramentas... Meus vizinhos adoram e eu ganho uma renda extra!",
      rating: 5,
      items: "Equipamentos de jardim"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Histórias de Sucesso
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça pessoas reais que transformaram seus itens ociosos em uma fonte de renda na SCRAP.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-primary mb-2">R$ 25.000+</div>
            <div className="text-sm text-muted-foreground">Ganhos médios anuais</div>
          </Card>
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-accent mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Proprietários ativos</div>
          </Card>
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-bright-blue mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Satisfação</div>
          </Card>
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-burgundy mb-2">15 dias</div>
            <div className="text-sm text-muted-foreground">Para primeiro aluguel</div>
          </Card>
        </div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {stories.map((story, index) => (
            <Card key={index} className="relative overflow-hidden">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-muted-foreground/20" />
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {story.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-semibold">{story.name}</h3>
                    <p className="text-sm text-muted-foreground">{story.location}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    {story.earnings} <span className="text-sm font-normal text-muted-foreground">{story.period}</span>
                  </div>
                  <div className="text-sm text-accent font-medium">{story.items}</div>
                </div>
                
                <p className="text-muted-foreground italic">"{story.story}"</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="text-center p-8 bg-gradient-to-r from-primary/10 to-accent/10">
          <h2 className="text-2xl font-bold mb-4">Sua História Pode Ser a Próxima!</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Junte-se a centenas de pessoas que já descobriram como transformar itens ociosos em renda extra.
            É fácil, seguro e lucrativo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-hero px-8 py-3 rounded-full font-semibold">
              Começar a Ganhar Agora
            </button>
            <button className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-semibold transition-colors">
              Calcular Meus Ganhos
            </button>
          </div>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default SuccessStoriesPage;
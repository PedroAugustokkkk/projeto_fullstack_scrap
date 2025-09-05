import { Search, MessageCircle, HandHeart, Shield } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Navegue & Encontre",
      description: "Encontre o item perfeito para alugar usando nossa barra de pesquisa fácil de usar e filtros detalhados.",
      step: "01"
    },
    {
      icon: MessageCircle,
      title: "Conecte-se & Converse",
      description: "Mande uma mensagem ao proprietário para verificar a disponibilidade, fazer perguntas e combinar os detalhes do aluguel.",
      step: "02"
    },
    {
      icon: HandHeart,
      title: "Alugue & Divirta-se",
      description: "Pegue o item, aproveite seu uso e devolva-o no prazo combinado para manter a comunidade feliz.",
      step: "03"
    },
    {
      icon: Shield,
      title: "Protegido e Segurado",
      description: "Todos os aluguéis são protegidos por nossa garantia de seguro (Contratos Inteligentes), garantindo tranquilidade para você e o proprietário.",
      step: "04"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-bright-blue rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Como a SCRAP Funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Alugar itens nunca foi tão fácil. Siga estes simples passos para começar a compartilhar e economizar hoje mesmo.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={step.title}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step Number */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-accent-foreground">{step.step}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>

                {/* Connector Line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-primary/50 to-transparent transform translate-x-4 translate-y-0"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-card p-6 rounded-2xl shadow-card">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full border-2 border-white"></div>
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-burgundy rounded-full border-2 border-white"></div>
              <div className="w-10 h-10 bg-gradient-to-br from-burgundy to-primary rounded-full border-2 border-white"></div>
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground">Junte-se a mais de 1 inquilino satisfeito</p>
              <p className="text-sm text-muted-foreground">Comece a alugar hoje mesmo - a inscrição é gratuita!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
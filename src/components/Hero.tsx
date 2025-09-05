import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/10 rounded-full float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/10 rounded-full float" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8 animate-bounce-in">
            <Sparkles className="h-4 w-4 text-white" />
            <span className="text-white font-medium">Alugue tudo, Não tenha nada</span>
            <Zap className="h-4 w-4 text-white" />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up">
            <span className="text-white">Alugue</span>{" "}
            <span className="bg-gradient-to-r from-white to-warm-cream bg-clip-text text-transparent">
              Tudo
            </span>
            <br />
            <span className="bg-gradient-to-r from-warm-cream to-white bg-clip-text text-transparent">
              De Qualquer Pessoa
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Junte-se a milhares de pessoas que compartilham e alugam itens em suas comunidades.
            De câmeras a equipamentos de camping, ferramentas elétricas a artigos para festas – a SCRAP tem de tudo.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button className="btn-hero text-lg px-8 py-4 h-auto">
              Começe a Alugar
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button className="btn-secondary-hero text-lg px-8 py-4 h-auto">
              Liste Os Seus Itens
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">0</div>
              <div className="text-white/80">Itens Disponíveis</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">0</div>
              <div className="text-white/80">Locatários(as) Felizes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">1</div>
              <div className="text-white/80">Cidade</div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
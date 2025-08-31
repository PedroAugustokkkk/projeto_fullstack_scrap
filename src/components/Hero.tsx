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
            <span className="text-white font-medium">Rent Everything, Own Nothing</span>
            <Zap className="h-4 w-4 text-white" />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up">
            <span className="text-white">Rent</span>{" "}
            <span className="bg-gradient-to-r from-white to-cream bg-clip-text text-transparent">
              Anything
            </span>
            <br />
            <span className="bg-gradient-to-r from-cream to-white bg-clip-text text-transparent">
              From Anyone
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Join thousands of people sharing and renting items in their community. 
            From cameras to camping gear, power tools to party supplies – SCRAP has it all.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button className="btn-hero text-lg px-8 py-4 h-auto">
              Start Renting
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button className="btn-secondary-hero text-lg px-8 py-4 h-auto">
              List Your Items
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-white/80">Items Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">15K+</div>
              <div className="text-white/80">Happy Renters</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">200+</div>
              <div className="text-white/80">Cities</div>
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
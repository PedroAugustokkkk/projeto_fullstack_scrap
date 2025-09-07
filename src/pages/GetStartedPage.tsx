import { useState } from "react";
import { User, Mail, Lock, Phone, MapPin, Check, ArrowRight, Shield, Star, DollarSign } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

const GetStartedPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userType, setUserType] = useState<"renter" | "owner" | "both" | null>(null);

  const steps = [
    { number: 1, title: "Tipo de Usuário", description: "Como você quer usar a SCRAP?" },
    { number: 2, title: "Informações Pessoais", description: "Dados básicos para sua conta" },
    { number: 3, title: "Verificação", description: "Confirme sua identidade" },
    { number: 4, title: "Pronto!", description: "Sua conta está criada" }
  ];

  const userTypes = [
    {
      type: "renter" as const,
      title: "Quero Alugar",
      description: "Procuro itens para alugar de outras pessoas",
      icon: "🔍",
      benefits: [
        "Acesso a milhares de itens",
        "Preços até 80% menores",
        "Seguro incluso",
        "Entrega flexível"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      type: "owner" as const,
      title: "Quero Alugar Meus Itens",
      description: "Tenho itens que quero disponibilizar para aluguel",
      icon: "💰",
      benefits: [
        "Renda extra com itens parados",
        "Anúncios gratuitos",
        "Pagamento garantido",
        "Proteção total"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      type: "both" as const,
      title: "Ambos",
      description: "Quero alugar itens e também disponibilizar os meus",
      icon: "🤝",
      benefits: [
        "Todos os benefícios anteriores",
        "Comunidade completa",
        "Economia máxima",
        "Impacto ambiental positivo"
      ],
      color: "from-purple-500 to-pink-500"
    }
  ];

  const stats = [
    { number: "10K+", label: "Itens disponíveis", icon: "📦" },
    { number: "2K+", label: "Usuários ativos", icon: "👥" },
    { number: "150+", label: "Cidades", icon: "🏙️" },
    { number: "4.9", label: "Avaliação média", icon: "⭐" }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      text: "Consegui alugar uma furadeira por apenas R$ 20 ao invés de comprar por R$ 400!",
      avatar: "👩‍💼"
    },
    {
      name: "João Santos",
      text: "Minha câmera parada rendeu R$ 800 no último mês. Incrível!",
      avatar: "👨‍💻"
    },
    {
      name: "Ana Costa",
      text: "Plataforma super segura e fácil de usar. Recomendo!",
      avatar: "👩‍🎨"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Progress Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Comece sua Jornada na SCRAP
            </h1>
            <p className="text-xl text-muted-foreground">
              Em poucos minutos você estará conectado à maior comunidade de compartilhamento do Brasil
            </p>
          </div>
          
          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-4 mb-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex flex-col items-center ${index <= currentStep - 1 ? 'text-primary' : 'text-muted-foreground'}`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors mb-2 ${
                    index < currentStep - 1 
                      ? 'bg-primary text-primary-foreground' 
                      : index === currentStep - 1
                      ? 'bg-primary text-primary-foreground border-4 border-primary/20'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {index < currentStep - 1 ? <Check className="h-6 w-6" /> : step.number}
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium">{step.title}</div>
                    <div className="text-xs opacity-70">{step.description}</div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className={`h-6 w-6 mx-4 ${index < currentStep - 1 ? 'text-primary' : 'text-muted-foreground'}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Step 1: User Type Selection */}
          {currentStep === 1 && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Como você quer usar a SCRAP?</h2>
                <p className="text-muted-foreground">Selecione a opção que melhor descreve seu interesse</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {userTypes.map((type) => (
                  <Card
                    key={type.type}
                    className={`cursor-pointer transition-all duration-300 hover:shadow-glow hover:-translate-y-1 ${
                      userType === type.type ? 'ring-2 ring-primary shadow-glow' : ''
                    }`}
                    onClick={() => setUserType(type.type)}
                  >
                    <CardHeader className="text-center">
                      <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${type.color} rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-lg`}>
                        {type.icon}
                      </div>
                      <CardTitle className="text-xl">{type.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{type.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {type.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-center gap-2 text-sm">
                            <Check className="h-4 w-4 text-green-500" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="text-center">
                <Button
                  onClick={() => setCurrentStep(2)}
                  disabled={!userType}
                  className="btn-hero px-8"
                >
                  Continuar
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Personal Information */}
          {currentStep === 2 && (
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Suas Informações Pessoais</h2>
                <p className="text-muted-foreground">Precisamos de alguns dados para criar sua conta segura</p>
              </div>
              
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nome Completo</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                        <Input className="pl-10" placeholder="Seu nome completo" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Telefone</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                        <Input className="pl-10" placeholder="(11) 99999-9999" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                      <Input className="pl-10" type="email" placeholder="seu@email.com" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Senha</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                      <Input className="pl-10" type="password" placeholder="Mínimo 8 caracteres" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Cidade</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                      <Input className="pl-10" placeholder="São Paulo, SP" />
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 pt-4">
                    <Checkbox id="terms" />
                    <label htmlFor="terms" className="text-sm">
                      Aceito os <a href="#" className="text-primary hover:underline">Termos de Uso</a> e a{" "}
                      <a href="#" className="text-primary hover:underline">Política de Privacidade</a>
                    </label>
                  </div>
                </CardContent>
              </Card>
              
              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setCurrentStep(1)}>
                  Voltar
                </Button>
                <Button onClick={() => setCurrentStep(3)} className="btn-hero">
                  Continuar
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Verification */}
          {currentStep === 3 && (
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Verificação de Conta</h2>
                <p className="text-muted-foreground">Para sua segurança e da comunidade, vamos verificar sua identidade</p>
              </div>
              
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Verificação por SMS</h3>
                    <p className="text-muted-foreground mb-4">
                      Enviamos um código de 6 dígitos para o número (11) 99999-9999
                    </p>
                  </div>
                  
                  <div className="flex justify-center gap-2">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <Input
                        key={i}
                        className="w-12 h-12 text-center text-lg font-bold"
                        maxLength={1}
                      />
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">
                      Não recebeu o código?
                    </p>
                    <Button variant="link" className="p-0">
                      Reenviar código
                    </Button>
                  </div>
                  
                  <div className="bg-accent/10 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Por que verificamos?</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Garante a segurança da comunidade</li>
                      <li>• Previne fraudes e contas falsas</li>
                      <li>• Aumenta a confiança entre usuários</li>
                      <li>• Cumpre regulamentações de segurança</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setCurrentStep(2)}>
                  Voltar
                </Button>
                <Button onClick={() => setCurrentStep(4)} className="btn-hero">
                  Verificar
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 4: Success */}
          {currentStep === 4 && (
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <Check className="h-12 w-12 text-white" />
                </div>
                <h2 className="text-3xl font-bold">Bem-vindo à SCRAP! 🎉</h2>
                <p className="text-xl text-muted-foreground">
                  Sua conta foi criada com sucesso. Você já pode começar a explorar nossa plataforma!
                </p>
              </div>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Próximos passos:</h3>
                  <div className="space-y-3 text-left">
                    {userType === "renter" || userType === "both" ? (
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">1</div>
                        <span>Explore milhares de itens disponíveis para aluguel</span>
                      </div>
                    ) : null}
                    
                    {userType === "owner" || userType === "both" ? (
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">
                          {userType === "both" ? "2" : "1"}
                        </div>
                        <span>Adicione seus primeiros itens para aluguel</span>
                      </div>
                    ) : null}
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm">
                        {userType === "both" ? "3" : "2"}
                      </div>
                      <span>Complete seu perfil para aumentar a confiança</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {userType === "renter" || userType === "both" ? (
                  <Button className="btn-hero">
                    Explorar Itens
                  </Button>
                ) : null}
                
                {userType === "owner" || userType === "both" ? (
                  <Button variant="outline">
                    Adicionar Meu Primeiro Item
                  </Button>
                ) : null}
              </div>
            </div>
          )}
        </div>

        {/* Stats & Testimonials */}
        {currentStep === 1 && (
          <div className="mt-20 space-y-16">
            {/* Stats */}
            <section className="text-center">
              <h3 className="text-2xl font-bold mb-8">A SCRAP em Números</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-4xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Testimonials */}
            <section className="text-center">
              <h3 className="text-2xl font-bold mb-8">O que nossos usuários dizem</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((testimonial) => (
                  <Card key={testimonial.name} className="text-center">
                    <CardContent className="p-6">
                      <div className="text-4xl mb-4">{testimonial.avatar}</div>
                      <p className="text-muted-foreground italic mb-4">"{testimonial.text}"</p>
                      <p className="font-semibold">{testimonial.name}</p>
                      <div className="flex justify-center gap-1 mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default GetStartedPage;
import { Search, MessageCircle, HandHeart, Shield, Users, DollarSign, Clock, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const HowItWorksPage = () => {
  const steps = [
    {
      icon: Search,
      title: "1. Navegue & Encontre",
      description: "Use nossa barra de pesquisa inteligente e filtros avançados para encontrar exatamente o que você precisa. Explore por categoria, localização, preço e disponibilidade.",
      details: [
        "Busca por palavra-chave ou categoria",
        "Filtros por localização e data",
        "Comparação de preços automática",
        "Avaliações e fotos reais"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MessageCircle,
      title: "2. Conecte-se & Converse",
      description: "Entre em contato direto com o proprietário através do nosso sistema de mensagens seguro. Tire dúvidas, negocie detalhes e confirme a disponibilidade.",
      details: [
        "Chat integrado na plataforma",
        "Verificação de identidade obrigatória",
        "Histórico de conversas salvo",
        "Notificações em tempo real"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: HandHeart,
      title: "3. Alugue & Divirta-se",
      description: "Combine os detalhes de entrega, faça o pagamento seguro através da plataforma e aproveite seu item. Devolva no prazo combinado para manter todos felizes.",
      details: [
        "Pagamento 100% seguro",
        "Opções de entrega flexíveis",
        "Suporte durante todo o período",
        "Sistema de avaliação mútua"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "4. Protegido & Segurado",
      description: "Todos os aluguéis são protegidos por nossa garantia completa. Contratos digitais, seguro contra danos e suporte 24/7 para sua tranquilidade.",
      details: [
        "Seguro contra danos incluído",
        "Contratos digitais automáticos",
        "Suporte ao cliente 24/7",
        "Resolução de conflitos gratuita"
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Economize Dinheiro",
      description: "Pague apenas pelo tempo que usar, sem precisar comprar itens caros que você usa raramente.",
      stats: "Até 80% de economia"
    },
    {
      icon: Users,
      title: "Comunidade Confiável",
      description: "Todos os usuários são verificados e avaliados pela comunidade, garantindo segurança e confiabilidade.",
      stats: "98% de aprovação"
    },
    {
      icon: Clock,
      title: "Disponibilidade 24/7",
      description: "Encontre e alugue itens a qualquer hora do dia, com entregas flexíveis que se adaptam à sua agenda.",
      stats: "Resposta em 2h"
    },
    {
      icon: Star,
      title: "Qualidade Garantida",
      description: "Todos os itens passam por verificação de qualidade e são cobertos pelo nosso seguro completo.",
      stats: "4.8/5 satisfação"
    }
  ];

  const faqs = [
    {
      question: "Como funciona o pagamento?",
      answer: "O pagamento é feito de forma segura através da plataforma. Você paga apenas quando confirmar o aluguel, e o valor fica retido até a devolução do item."
    },
    {
      question: "E se o item quebrar durante o uso?",
      answer: "Todos os aluguéis incluem seguro contra danos acidentais. Pequenos desgastes são normais, mas danos maiores são cobertos automaticamente."
    },
    {
      question: "Posso cancelar um aluguel?",
      answer: "Sim! Você pode cancelar até 24h antes do início do aluguel sem taxa. Cancelamentos de última hora podem ter taxa de 20%."
    },
    {
      question: "Como funciona a entrega?",
      answer: "Cada proprietário define suas opções de entrega: retirada local, entrega paga ou envio pelos correios. Você escolhe a mais conveniente."
    },
    {
      question: "Os proprietários são confiáveis?",
      answer: "Todos passam por verificação de identidade e são avaliados pela comunidade. Você pode ver o histórico e avaliações antes de alugar."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-accent/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Como a SCRAP Funciona
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Descubra como é fácil, seguro e econômico alugar qualquer item que você precisa. 
              Nossa plataforma conecta pessoas de forma inteligente e protegida.
            </p>
            <Button size="lg" className="btn-hero">
              Começar Agora - É Grátis!
            </Button>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Simples em 4 Passos</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Do primeiro clique até a devolução do item, todo o processo foi pensado para ser simples e seguro
              </p>
            </div>

            <div className="space-y-20">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div key={step.title} className={`flex items-center gap-12 ${!isEven ? 'flex-row-reverse' : ''}`}>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-glow`}>
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold">{step.title}</h3>
                      </div>
                      
                      <p className="text-lg text-muted-foreground mb-6">
                        {step.description}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {step.details.map((detail) => (
                          <div key={detail} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            <span className="text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className={`aspect-video bg-gradient-to-br ${step.color} rounded-2xl shadow-glow opacity-20 flex items-center justify-center`}>
                        <IconComponent className="h-24 w-24 text-white" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-background to-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que Escolher a SCRAP?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Mais do que uma plataforma de aluguel, somos uma comunidade que valoriza sustentabilidade e economia compartilhada
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={benefit.title} className="text-center hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
                    <CardHeader>
                      <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 shadow-glow">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                      <Badge className="mx-auto bg-accent/20 text-accent-foreground">
                        {benefit.stats}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Esclarecemos as principais dúvidas sobre como funciona nossa plataforma
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="hover:shadow-card transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-left">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">Ainda tem dúvidas?</p>
              <Button variant="outline">
                Falar com Suporte
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para Começar?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Junte-se a milhares de pessoas que já descobriram uma forma mais inteligente 
              e sustentável de ter acesso aos itens que precisam.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Encontrar Itens para Alugar
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Começar a Alugar Meus Itens
              </Button>
            </div>

            <div className="mt-12 flex justify-center gap-8 text-sm opacity-80">
              <div>✓ Cadastro gratuito</div>
              <div>✓ Sem taxas escondidas</div>
              <div>✓ Suporte 24/7</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorksPage;
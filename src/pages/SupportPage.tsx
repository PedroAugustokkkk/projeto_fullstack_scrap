import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Phone, Mail, Clock, HelpCircle, Shield } from "lucide-react";

const SupportPage = () => {
  const [ticketType, setTicketType] = useState("");

  const faqs = [
    {
      question: "Como funciona o aluguel na SCRAP?",
      answer: "Você encontra o item desejado, entra em contato com o proprietário, combina detalhes e efetua o pagamento pela plataforma. O seguro está incluso."
    },
    {
      question: "O que fazer se o item for danificado?",
      answer: "Comunique imediatamente através do chat, documente com fotos e acione nosso seguro. Nossa equipe auxiliará no processo."
    },
    {
      question: "Como recebo meu pagamento como proprietário?",
      answer: "Os pagamentos são processados automaticamente após a confirmação da retirada do item e transferidos para sua conta em até 24h."
    },
    {
      question: "Posso cancelar um aluguel?",
      answer: "Sim, mas podem incidir taxas dependendo do prazo. Consulte nossa política de cancelamento para mais detalhes."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Central de Suporte
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos aqui para ajudar! Encontre respostas ou entre em contato conosco.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6 hover:shadow-glow transition-all">
            <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Chat Online</h3>
            <p className="text-muted-foreground mb-4">Resposta imediata, 24/7</p>
            <Button className="btn-hero w-full">
              Iniciar Chat
            </Button>
          </Card>
          
          <Card className="text-center p-6 hover:shadow-glow transition-all">
            <Phone className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Telefone</h3>
            <p className="text-muted-foreground mb-4">(11) 4000-0000</p>
            <Button variant="outline" className="w-full">
              Ligar Agora
            </Button>
          </Card>
          
          <Card className="text-center p-6 hover:shadow-glow transition-all">
            <Mail className="h-12 w-12 text-bright-blue mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">E-mail</h3>
            <p className="text-muted-foreground mb-4">suporte@scrap.com.br</p>
            <Button variant="outline" className="w-full">
              Enviar E-mail
            </Button>
          </Card>
        </div>

        {/* Support Hours */}
        <Card className="mb-12 p-6 text-center bg-gradient-to-r from-primary/10 to-accent/10">
          <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Horários de Atendimento</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div>
              <p className="font-medium">Chat Online</p>
              <p className="text-muted-foreground">24 horas por dia, 7 dias por semana</p>
            </div>
            <div>
              <p className="font-medium">Telefone</p>
              <p className="text-muted-foreground">Segunda a Sexta: 8h às 22h<br/>Sábado: 9h às 18h</p>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Abrir Chamado</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name">Nome Completo</Label>
                <Input id="name" placeholder="Seu nome" />
              </div>
              
              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" placeholder="seu@email.com" />
              </div>
              
              <div>
                <Label htmlFor="type">Tipo do Problema</Label>
                <Select value={ticketType} onValueChange={setTicketType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="payment">Problemas de Pagamento</SelectItem>
                    <SelectItem value="item">Problemas com Item</SelectItem>
                    <SelectItem value="user">Problemas com Usuário</SelectItem>
                    <SelectItem value="insurance">Acionamento de Seguro</SelectItem>
                    <SelectItem value="technical">Problemas Técnicos</SelectItem>
                    <SelectItem value="other">Outros</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="subject">Assunto</Label>
                <Input id="subject" placeholder="Resumo do problema" />
              </div>
              
              <div>
                <Label htmlFor="message">Descrição Detalhada</Label>
                <Textarea 
                  id="message" 
                  placeholder="Descreva seu problema com o máximo de detalhes possível..."
                  rows={4}
                />
              </div>
              
              <Button className="w-full btn-hero">
                Enviar Chamado
              </Button>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HelpCircle className="h-6 w-6 mr-2" />
                  Perguntas Frequentes
                </CardTitle>
              </CardHeader>
            </Card>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">{faq.question}</h4>
                    <p className="text-muted-foreground text-sm">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Emergency Contact */}
            <Card className="mt-6 border-orange-200 bg-orange-50">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-orange-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-orange-900 mb-2">Emergência 24h</h4>
                    <p className="text-orange-700 text-sm">
                      Para situações urgentes como roubo, acidente ou emergência médica relacionada ao aluguel:
                    </p>
                    <p className="font-bold text-orange-900 mt-2">📱 (11) 9 9999-9999</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SupportPage;
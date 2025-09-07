import { useState } from "react";
import { Plus, Camera, FileText, MapPin, Calendar, DollarSign } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const RentPage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { number: 1, title: "Informações Básicas", icon: FileText },
    { number: 2, title: "Fotos e Descrição", icon: Camera },
    { number: 3, title: "Preço e Disponibilidade", icon: DollarSign },
    { number: 4, title: "Localização", icon: MapPin }
  ];

  const categories = [
    "Eletrônicos", "Ferramentas", "Esportes", "Casa & Jardim", 
    "Veículos", "Música", "Fotografia", "Outros"
  ];

  const myListings = [
    {
      id: 1,
      title: "Furadeira Bosch Professional",
      category: "Ferramentas",
      price: "R$ 25/dia",
      status: "Ativo",
      views: 127,
      bookings: 8
    },
    {
      id: 2,
      title: "Câmera Canon DSLR",
      category: "Fotografia",
      price: "R$ 80/dia",
      status: "Alugado",
      views: 89,
      bookings: 12
    },
    {
      id: 3,
      title: "Barraca de Camping",
      category: "Esportes",
      price: "R$ 35/dia",
      status: "Pausado",
      views: 56,
      bookings: 4
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Alugue Seus Itens
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforme seus itens parados em renda extra. É fácil, seguro e lucrativo!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Add New Item Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  Adicionar Novo Item
                </CardTitle>
                
                {/* Progress Steps */}
                <div className="flex items-center gap-4 mt-4">
                  {steps.map((step, index) => (
                    <div key={step.number} className="flex items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        currentStep >= step.number 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {currentStep > step.number ? '✓' : step.number}
                      </div>
                      {index < steps.length - 1 && (
                        <div className={`w-12 h-0.5 mx-2 transition-colors ${
                          currentStep > step.number ? 'bg-primary' : 'bg-muted'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nome do Item</label>
                      <Input placeholder="Ex: Furadeira Bosch Professional" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Categoria</label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {categories.map((category) => (
                          <Badge
                            key={category}
                            variant="outline"
                            className="cursor-pointer hover:bg-accent/20 p-2 text-center justify-center"
                          >
                            {category}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Estado do Item</label>
                      <div className="flex gap-2">
                        {["Novo", "Seminovo", "Usado"].map((condition) => (
                          <Badge
                            key={condition}
                            variant="outline"
                            className="cursor-pointer hover:bg-accent/20 p-2"
                          >
                            {condition}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Fotos do Item</label>
                      <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center">
                        <Camera className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                        <p className="text-muted-foreground mb-2">Clique para adicionar fotos</p>
                        <p className="text-sm text-muted-foreground">Adicione até 10 fotos (máx. 5MB cada)</p>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Descrição Detalhada</label>
                      <Textarea
                        placeholder="Descreva seu item em detalhes: características, especificações, acessórios inclusos..."
                        rows={5}
                      />
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Preço por Dia</label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2">R$</span>
                          <Input className="pl-8" placeholder="0,00" />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Desconto Semanal</label>
                        <div className="relative">
                          <span className="absolute right-3 top-1/2 transform -translate-y-1/2">%</span>
                          <Input className="pr-8" placeholder="10" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Período Mínimo de Aluguel</label>
                      <div className="flex gap-2">
                        {["1 dia", "3 dias", "1 semana", "Personalizado"].map((period) => (
                          <Badge
                            key={period}
                            variant="outline"
                            className="cursor-pointer hover:bg-accent/20 p-2"
                          >
                            {period}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Caução Necessária</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2">R$</span>
                        <Input className="pl-8" placeholder="100,00" />
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">CEP</label>
                      <Input placeholder="00000-000" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Cidade</label>
                        <Input placeholder="São Paulo" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Estado</label>
                        <Input placeholder="SP" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Opções de Entrega</label>
                      <div className="space-y-2">
                        {[
                          "Retirada no local",
                          "Entrega local (taxa adicional)",
                          "Envio pelos Correios"
                        ].map((option) => (
                          <Badge
                            key={option}
                            variant="outline"
                            className="cursor-pointer hover:bg-accent/20 p-2 w-full justify-start"
                          >
                            {option}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex justify-between pt-4">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                    disabled={currentStep === 1}
                  >
                    Anterior
                  </Button>
                  
                  {currentStep < 4 ? (
                    <Button
                      onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
                      className="btn-hero"
                    >
                      Próximo
                    </Button>
                  ) : (
                    <Button className="btn-hero">
                      Publicar Item
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* My Listings Sidebar */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Meus Anúncios</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {myListings.map((listing) => (
                  <div key={listing.id} className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">{listing.title}</h4>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                      <span>{listing.category}</span>
                      <Badge variant={
                        listing.status === 'Ativo' ? 'default' :
                        listing.status === 'Alugado' ? 'secondary' : 'outline'
                      }>
                        {listing.status}
                      </Badge>
                    </div>
                    <div className="text-sm">
                      <p>{listing.views} visualizações</p>
                      <p>{listing.bookings} reservas</p>
                    </div>
                    <div className="text-lg font-bold text-primary mt-2">
                      {listing.price}
                    </div>
                  </div>
                ))}
                
                <Button variant="outline" className="w-full">
                  Ver Todos os Anúncios
                </Button>
              </CardContent>
            </Card>

            {/* Earnings Summary */}
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Ganhos Este Mês</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">R$ 1.250</div>
                <p className="text-sm text-muted-foreground">+18% em relação ao mês anterior</p>
                
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Aluguéis ativos</span>
                    <span className="font-medium">3</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Taxa da plataforma</span>
                    <span className="font-medium">R$ 125</span>
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

export default RentPage;
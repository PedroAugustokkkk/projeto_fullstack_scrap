import { useState } from "react";
import { Upload, Plus, DollarSign, Calendar, MapPin, Camera } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ListItemsPage = () => {
  const [step, setStep] = useState(1);

  const categories = [
    "Fotografia", "Ferramentas e Equipamentos", "Ar-Livre e Acampamento", 
    "Festa & Eventos", "Esportes e Recreação", "Eletrônicos", "Veículos", "Casa e Jardim"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Liste Seus Itens
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforme seus itens ociosos em uma fonte de renda extra. É fácil, seguro e lucrativo.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6">
            <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Renda Extra</h3>
            <p className="text-muted-foreground">Ganhe até R$ 500/mês alugando itens que você já possui</p>
          </Card>
          
          <Card className="text-center p-6">
            <Calendar className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Você Decide</h3>
            <p className="text-muted-foreground">Defina preços, disponibilidade e condições de aluguel</p>
          </Card>
          
          <Card className="text-center p-6">
            <MapPin className="h-12 w-12 text-bright-blue mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">100% Seguro</h3>
            <p className="text-muted-foreground">Proteção total com seguro e verificação de usuários</p>
          </Card>
        </div>

        {/* Listing Form */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Cadastre Seu Primeiro Item</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {step === 1 && (
              <>
                <div>
                  <Label htmlFor="title">Título do Item</Label>
                  <Input id="title" placeholder="Ex: Furadeira Bosch Profissional" />
                </div>
                
                <div>
                  <Label htmlFor="category">Categoria</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat.toLowerCase()}>{cat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="description">Descrição</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Descreva seu item, estado de conservação, acessórios inclusos..."
                    rows={4}
                  />
                </div>
                
                <Button onClick={() => setStep(2)} className="w-full btn-hero">
                  Próximo: Fotos e Preço
                </Button>
              </>
            )}
            
            {step === 2 && (
              <>
                <div>
                  <Label>Fotos do Item</Label>
                  <div className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-8 text-center">
                    <Camera className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4">Adicione até 8 fotos</p>
                    <Button variant="outline">
                      <Upload className="h-4 w-4 mr-2" />
                      Fazer Upload
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="daily-price">Preço por Dia (R$)</Label>
                    <Input id="daily-price" type="number" placeholder="25" />
                  </div>
                  <div>
                    <Label htmlFor="weekly-price">Preço por Semana (R$)</Label>
                    <Input id="weekly-price" type="number" placeholder="150" />
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    Voltar
                  </Button>
                  <Button className="flex-1 btn-hero">
                    Publicar Item
                  </Button>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        {/* Success Stories */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-8">Histórias de Sucesso</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="p-6">
              <p className="text-muted-foreground mb-4">
                "Consegui ganhar R$ 300 no primeiro mês alugando minha furadeira e serra elétrica!"
              </p>
              <p className="font-semibold">- Carlos, São Paulo</p>
            </Card>
            <Card className="p-6">
              <p className="text-muted-foreground mb-4">
                "Minha câmera profissional estava parada. Agora ela me rende R$ 200 por semana!"
              </p>
              <p className="font-semibold">- Ana, Rio de Janeiro</p>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ListItemsPage;
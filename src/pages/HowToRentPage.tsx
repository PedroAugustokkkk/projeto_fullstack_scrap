import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Search, MessageCircle, CreditCard, Package } from "lucide-react";

const HowToRentPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Como Alugar
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Alugar na SCRAP é simples e seguro. Siga nosso guia passo a passo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center p-6">
            <Search className="h-16 w-16 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">1. Encontre o Item</h3>
            <p className="text-muted-foreground">Use nossa busca ou navegue pelas categorias</p>
          </Card>
          
          <Card className="text-center p-6">
            <MessageCircle className="h-16 w-16 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">2. Entre em Contato</h3>
            <p className="text-muted-foreground">Converse com o proprietário sobre detalhes</p>
          </Card>
          
          <Card className="text-center p-6">
            <CreditCard className="h-16 w-16 text-bright-blue mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">3. Faça o Pagamento</h3>
            <p className="text-muted-foreground">Pagamento seguro através da plataforma</p>
          </Card>
          
          <Card className="text-center p-6">
            <Package className="h-16 w-16 text-burgundy mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">4. Retire o Item</h3>
            <p className="text-muted-foreground">Combine local e horário de retirada</p>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Dicas Importantes</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Sempre verifique o estado do item antes de retirar</li>
              <li>• Tire fotos do item no momento da retirada</li>
              <li>• Mantenha comunicação com o proprietário</li>
              <li>• Devolva o item nas mesmas condições</li>
              <li>• Deixe uma avaliação após o aluguel</li>
            </ul>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HowToRentPage;
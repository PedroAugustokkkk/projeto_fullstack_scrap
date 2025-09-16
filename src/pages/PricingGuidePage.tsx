import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Calculator, Target, Lightbulb } from "lucide-react";

const PricingGuidePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Guia de Precificação
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Aprenda a definir preços competitivos e maximizar seus ganhos na SCRAP.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center p-6">
            <Calculator className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Calcule os Custos</h3>
            <p className="text-muted-foreground">Considere depreciação, manutenção e seguro</p>
          </Card>
          
          <Card className="text-center p-6">
            <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Pesquise o Mercado</h3>
            <p className="text-muted-foreground">Veja preços de itens similares na plataforma</p>
          </Card>
          
          <Card className="text-center p-6">
            <Target className="h-12 w-12 text-bright-blue mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Defina seu Objetivo</h3>
            <p className="text-muted-foreground">Priorize volume ou margem de lucro</p>
          </Card>
          
          <Card className="text-center p-6">
            <Lightbulb className="h-12 w-12 text-burgundy mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Teste e Ajuste</h3>
            <p className="text-muted-foreground">Monitore demanda e ajuste preços</p>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Fórmula de Precificação</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/30 p-6 rounded-lg">
                <p className="text-lg font-medium mb-4">Preço Diário = (Valor do Item ÷ 365) × Fator de Risco × Margem de Lucro</p>
                <div className="space-y-2 text-muted-foreground">
                  <p>• <strong>Valor do Item:</strong> Preço atual no mercado</p>
                  <p>• <strong>Fator de Risco:</strong> 1.5 a 3.0 (dependendo da fragilidade)</p>
                  <p>• <strong>Margem de Lucro:</strong> 1.2 a 2.0 (20% a 100% de lucro)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Exemplos de Precificação</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold">Furadeira Bosch (R$ 300)</h4>
                    <p className="text-sm text-muted-foreground">Sugestão: R$ 20-30/dia</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold">Câmera Canon (R$ 3.000)</h4>
                    <p className="text-sm text-muted-foreground">Sugestão: R$ 80-120/dia</p>
                  </div>
                  <div className="border-l-4 border-bright-blue pl-4">
                    <h4 className="font-semibold">Barraca Camping (R$ 400)</h4>
                    <p className="text-sm text-muted-foreground">Sugestão: R$ 25-40/dia</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Dicas Para Sucesso</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Ofereça descontos para aluguéis longos</li>
                  <li>• Ajuste preços conforme demanda sazonal</li>
                  <li>• Mantenha seus itens sempre limpos</li>
                  <li>• Responda rapidamente às mensagens</li>
                  <li>• Colete avaliações positivas</li>
                  <li>• Monitore preços da concorrência</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PricingGuidePage;
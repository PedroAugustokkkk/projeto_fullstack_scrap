import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Camera, CreditCard, AlertTriangle, CheckCircle } from "lucide-react";

const SafetyTipsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Dicas de Segurança
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sua segurança é nossa prioridade. Siga estas dicas para uma experiência segura na SCRAP.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <Shield className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Verificação de Perfil</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Sempre verifique o perfil do usuário, avaliações e tempo na plataforma antes de fechar negócio.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-accent mb-2" />
              <CardTitle>Encontros Seguros</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Prefira locais públicos e movimentados para retirada e devolução de itens.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Camera className="h-8 w-8 text-bright-blue mb-2" />
              <CardTitle>Documentação</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Tire fotos do item antes e depois do aluguel para documentar seu estado.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CreditCard className="h-8 w-8 text-burgundy mb-2" />
              <CardTitle>Pagamento Seguro</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Use sempre o sistema de pagamento da SCRAP. Nunca faça transferências diretas.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <AlertTriangle className="h-8 w-8 text-orange-500 mb-2" />
              <CardTitle>Sinais de Alerta</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Desconfie de preços muito baixos, pressa excessiva ou pedidos para pagamento fora da plataforma.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CheckCircle className="h-8 w-8 text-green-500 mb-2" />
              <CardTitle>Comunicação Clara</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Mantenha toda comunicação dentro da plataforma e seja claro sobre expectativas.</p>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-3xl mx-auto p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">Em Caso de Problemas</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>Se você encontrar qualquer problema durante o processo de aluguel:</p>
            <ul className="space-y-2 pl-4">
              <li>• Entre em contato com nosso suporte imediatamente</li>
              <li>• Documente o problema com fotos e mensagens</li>
              <li>• Não tente resolver conflitos fora da plataforma</li>
              <li>• Relate usuários suspeitos ou comportamentos inadequados</li>
            </ul>
          </div>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default SafetyTipsPage;
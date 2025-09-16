import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, CreditCard, FileCheck, Phone, AlertCircle } from "lucide-react";

const OwnerProtectionPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Proteção aos Proprietários
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sua segurança e tranquilidade são nossa prioridade. Conheça todas as proteções disponíveis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <Shield className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Seguro Completo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Cobertura total contra danos, roubo e uso inadequado dos seus itens.</p>
              <ul className="text-sm space-y-1">
                <li>• Até R$ 50.000 por item</li>
                <li>• Reembolso em até 7 dias</li>
                <li>• Sem franquia</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-accent mb-2" />
              <CardTitle>Verificação de Usuários</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Todos os locatários passam por verificação rigorosa.</p>
              <ul className="text-sm space-y-1">
                <li>• Documento de identidade</li>
                <li>• Comprovante de renda</li>
                <li>• Histórico na plataforma</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CreditCard className="h-8 w-8 text-bright-blue mb-2" />
              <CardTitle>Pagamento Garantido</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Receba seu pagamento antes mesmo da retirada do item.</p>
              <ul className="text-sm space-y-1">
                <li>• Pagamento antecipado</li>
                <li>• Transferência automática</li>
                <li>• Taxa transparente</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <FileCheck className="h-8 w-8 text-burgundy mb-2" />
              <CardTitle>Contrato Digital</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Termos claros e juridicamente válidos para cada aluguel.</p>
              <ul className="text-sm space-y-1">
                <li>• Validade jurídica</li>
                <li>• Termos customizáveis</li>
                <li>• Assinatura eletrônica</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Phone className="h-8 w-8 text-green-500 mb-2" />
              <CardTitle>Suporte Especializado</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Equipe dedicada para resolver qualquer problema rapidamente.</p>
              <ul className="text-sm space-y-1">
                <li>• Atendimento 24/7</li>
                <li>• Mediação de conflitos</li>
                <li>• Suporte jurídico</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <AlertCircle className="h-8 w-8 text-orange-500 mb-2" />
              <CardTitle>Sistema de Avaliações</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Controle total sobre quem pode alugar seus itens.</p>
              <ul className="text-sm space-y-1">
                <li>• Histórico completo</li>
                <li>• Filtros de usuários</li>
                <li>• Bloqueio automático</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-3xl mx-auto p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Como Funciona a Proteção</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
              <div>
                <h3 className="font-semibold mb-2">Verificação Prévia</h3>
                <p className="text-muted-foreground">Todo locatário é verificado antes de poder alugar qualquer item.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
              <div>
                <h3 className="font-semibold mb-2">Contrato Automático</h3>
                <p className="text-muted-foreground">Um contrato digital é gerado automaticamente com todos os termos.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-bright-blue rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
              <div>
                <h3 className="font-semibold mb-2">Monitoramento Contínuo</h3>
                <p className="text-muted-foreground">Acompanhamos o aluguel do início ao fim para garantir segurança.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-burgundy rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
              <div>
                <h3 className="font-semibold mb-2">Suporte Imediato</h3>
                <p className="text-muted-foreground">Em caso de problemas, nossa equipe age rapidamente para resolver.</p>
              </div>
            </div>
          </div>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default OwnerProtectionPage;
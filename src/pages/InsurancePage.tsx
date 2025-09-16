import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, DollarSign, FileText, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const InsurancePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4ml md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Seguro SCRAP
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proteção completa para locatários e proprietários. Alugue com tranquilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">Para Locatários</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <Shield className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                Cobertura para danos acidentais até R$ 10.000
              </li>
              <li className="flex items-start">
                <Shield className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                Proteção contra roubo e furto
              </li>
              <li className="flex items-start">
                <Shield className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                Assistência 24h em caso de problemas
              </li>
              <li className="flex items-start">
                <Shield className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                Sem franquia para itens até R$ 1.000
              </li>
            </ul>
          </Card>
          
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">Para Proprietários</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <Shield className="h-5 w-5 text-accent mt-1 mr-3 flex-shrink-0" />
                Proteção total do seu patrimônio
              </li>
              <li className="flex items-start">
                <Shield className="h-5 w-5 text-accent mt-1 mr-3 flex-shrink-0" />
                Reembolso rápido em até 7 dias
              </li>
              <li className="flex items-start">
                <Shield className="h-5 w-5 text-accent mt-1 mr-3 flex-shrink-0" />
                Cobertura para uso inadequado
              </li>
              <li className="flex items-start">
                <Shield className="h-5 w-5 text-accent mt-1 mr-3 flex-shrink-0" />
                Suporte jurídico incluído
              </li>
            </ul>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6">
            <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Preço Justo</h3>
            <p className="text-muted-foreground">Apenas 3% do valor do aluguel</p>
          </Card>
          
          <Card className="text-center p-6">
            <FileText className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Processo Simples</h3>
            <p className="text-muted-foreground">Ativação automática em todos os aluguéis</p>
          </Card>
          
          <Card className="text-center p-6">
            <Phone className="h-12 w-12 text-bright-blue mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Suporte 24h</h3>
            <p className="text-muted-foreground">Atendimento especializado sempre</p>
          </Card>
        </div>

        <Card className="max-w-3xl mx-auto p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Como Acionar o Seguro</h2>
          <div className="space-y-4 text-muted-foreground mb-6">
            <p>Em caso de sinistro, siga estes passos:</p>
            <ol className="space-y-2 text-left pl-4">
              <li>1. Comunique o problema imediatamente através do app</li>
              <li>2. Documente o ocorrido com fotos detalhadas</li>
              <li>3. Preencha o formulário de sinistro online</li>
              <li>4. Aguarde contato de nossa equipe em até 24h</li>
            </ol>
          </div>
          <Button className="btn-hero">
            Reportar Sinistro
          </Button>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default InsurancePage;
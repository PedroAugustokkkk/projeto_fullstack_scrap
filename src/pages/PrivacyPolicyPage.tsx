import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Política de Privacidade
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Última atualização: Janeiro de 2025
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Informações que Coletamos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Informações de Cadastro:</h4>
                <ul className="space-y-1 text-muted-foreground pl-4">
                  <li>• Nome completo, CPF/CNPJ, data de nascimento</li>
                  <li>• E-mail, telefone, endereço</li>
                  <li>• Documentos de identificação</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Informações de Uso:</h4>
                <ul className="space-y-1 text-muted-foreground pl-4">
                  <li>• Dados de navegação e interação</li>
                  <li>• Histórico de aluguéis e transações</li>
                  <li>• Comunicações na plataforma</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Como Usamos Suas Informações</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Verificar identidade e prevenir fraudes</li>
                <li>• Processar aluguéis e pagamentos</li>
                <li>• Melhorar nossos serviços e experiência do usuário</li>
                <li>• Enviar notificações importantes sobre sua conta</li>
                <li>• Cumprir obrigações legais e regulamentares</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Compartilhamento de Dados</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Seus dados podem ser compartilhados apenas nas seguintes situações:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Com outros usuários (nome, foto, avaliações)</li>
                <li>• Com prestadores de serviços (pagamento, seguro)</li>
                <li>• Por determinação legal ou judicial</li>
                <li>• Em caso de fusão ou aquisição da empresa</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Segurança dos Dados</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Criptografia de dados sensíveis</li>
                <li>• Servidores seguros e monitorados 24/7</li>
                <li>• Acesso restrito por autenticação</li>
                <li>• Auditorias regulares de segurança</li>
                <li>• Backups automáticos e seguros</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Seus Direitos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Conforme a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Acessar seus dados pessoais</li>
                <li>• Corrigir informações incorretas</li>
                <li>• Excluir dados desnecessários</li>
                <li>• Solicitar portabilidade dos dados</li>
                <li>• Revogar consentimento a qualquer momento</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Cookies e Tecnologias</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Utilizamos cookies para melhorar sua experiência. Você pode:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Gerenciar preferências de cookies</li>
                <li>• Desabilitar cookies não essenciais</li>
                <li>• Acessar política detalhada de cookies</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Contato</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Para dúvidas sobre esta política ou exercer seus direitos:
              </p>
              <ul className="space-y-1 text-muted-foreground">
                <li>📧 E-mail: privacidade@scrap.com.br</li>
                <li>📱 Telefone: (11) 9999-9999</li>
                <li>🏢 Endereço: Rua da Privacidade, 123 - São Paulo, SP</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Termos de Serviço
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Última atualização: Janeiro de 2025
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Aceite dos Termos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Ao usar a SCRAP, você concorda com estes termos. Se não concordar, não use nossos serviços. 
                Reservamos o direito de modificar estes termos a qualquer momento, com notificação prévia aos usuários.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Descrição do Serviço</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                A SCRAP é uma plataforma digital que conecta pessoas que desejam alugar itens (Locatários) 
                com pessoas que possuem itens para alugar (Proprietários).
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Facilitamos a comunicação entre usuários</li>
                <li>• Processamos pagamentos de forma segura</li>
                <li>• Oferecemos seguro para transações</li>
                <li>• Fornecemos suporte ao cliente</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Cadastro e Conta</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Requisitos:</h4>
                  <ul className="space-y-1 text-muted-foreground pl-4">
                    <li>• Ser maior de 18 anos</li>
                    <li>• Fornecer informações verdadeiras e atualizadas</li>
                    <li>• Manter sigilo das credenciais de acesso</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Verificação:</h4>
                  <p className="text-muted-foreground">
                    Todos os usuários passam por processo de verificação incluindo documentos de identificação 
                    e comprovação de dados pessoais.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Responsabilidades dos Usuários</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Proprietários:</h4>
                  <ul className="space-y-1 text-muted-foreground pl-4">
                    <li>• Garantir que possuem direito sobre os itens listados</li>
                    <li>• Fornecer descrições precisas e fotos reais</li>
                    <li>• Manter itens em condições adequadas de uso</li>
                    <li>• Cumprir prazos acordados</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Locatários:</h4>
                  <ul className="space-y-1 text-muted-foreground pl-4">
                    <li>• Usar itens conforme finalidade pretendida</li>
                    <li>• Devolver itens nas mesmas condições</li>
                    <li>• Efetuar pagamentos nos prazos estabelecidos</li>
                    <li>• Comunicar problemas imediatamente</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Pagamentos e Taxas</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Taxa de serviço de 8% sobre o valor do aluguel</li>
                <li>• Taxa de processamento de pagamento de 2,5%</li>
                <li>• Seguro opcional de 3% sobre o valor do item</li>
                <li>• Multas por atraso ou danos conforme contrato</li>
                <li>• Reembolsos processados em até 7 dias úteis</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Seguro e Proteção</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Cobertura Incluída:</h4>
                  <ul className="space-y-1 text-muted-foreground pl-4">
                    <li>• Danos acidentais até R$ 10.000 por item</li>
                    <li>• Roubo e furto com boletim de ocorrência</li>
                    <li>• Uso inadequado comprovado</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Exclusões:</h4>
                  <ul className="space-y-1 text-muted-foreground pl-4">
                    <li>• Desgaste natural pelo uso</li>
                    <li>• Danos intencionais</li>
                    <li>• Itens com defeitos preexistentes não declarados</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Proibições</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Listar itens ilegais, perigosos ou roubados</li>
                <li>• Realizar transações fora da plataforma</li>
                <li>• Fornecer informações falsas</li>
                <li>• Usar a plataforma para atividades ilícitas</li>
                <li>• Assediar, ameaçar ou discriminar outros usuários</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Cancelamento e Suspensão</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Reservamos o direito de suspender ou cancelar contas que violem estes termos, incluindo:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Atividades fraudulentas ou suspeitas</li>
                <li>• Múltiplas avaliações negativas</li>
                <li>• Não cumprimento de obrigações contratuais</li>
                <li>• Violação de políticas da plataforma</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Limitação de Responsabilidade</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A SCRAP atua como intermediadora entre usuários. Não somos responsáveis por disputas entre partes, 
                qualidade dos itens, ou danos indiretos. Nossa responsabilidade está limitada aos termos do seguro oferecido.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Contato</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Para dúvidas sobre estes termos:
              </p>
              <ul className="space-y-1 text-muted-foreground">
                <li>📧 E-mail: juridico@scrap.com.br</li>
                <li>📱 Telefone: (11) 9999-9999</li>
                <li>💬 Chat: Disponível 24/7 no aplicativo</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfServicePage;
import { Heart, Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                SCRAP
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Um marketplace sustentável para alugar itens, economizar dinheiro e reduzir o desperdício.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-muted/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                <Instagram className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-muted/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                <Twitter className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-muted/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                <Facebook className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Para Locatários(as)</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Navegue Pelos Itens</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Como Alugar</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Dicas De Segurança</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Seguro</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Para Proprietários(as)</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Liste Seus Itens</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Guia de Precificação</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Proteção aos(às) Proprietários(as)</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Histórias de Sucesso</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2025 SCRAP. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Termos do Serviço</a>
            <a href="#" className="hover:text-primary transition-colors">Suporte</a>
          </div>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm flex items-center justify-center space-x-1">
            <span>Feito com</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>para um futuro sustentável.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
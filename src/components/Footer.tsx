import { Heart, Instagram, Twitter, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

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
              <li><Link to="/search" className="hover:text-primary transition-colors">Navegue Pelos Itens</Link></li>
              <li><Link to="/how-to-rent" className="hover:text-primary transition-colors">Como Alugar</Link></li>
              <li><Link to="/safety-tips" className="hover:text-primary transition-colors">Dicas De Segurança</Link></li>
              <li><Link to="/insurance" className="hover:text-primary transition-colors">Seguro</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Para Proprietários(as)</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/list-items" className="hover:text-primary transition-colors">Liste Seus Itens</Link></li>
              <li><Link to="/pricing-guide" className="hover:text-primary transition-colors">Guia de Precificação</Link></li>
              <li><Link to="/owner-protection" className="hover:text-primary transition-colors">Proteção aos(às) Proprietários(as)</Link></li>
              <li><Link to="/success-stories" className="hover:text-primary transition-colors">Histórias de Sucesso</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2025 SCRAP. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Política de Privacidade</Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors">Termos do Serviço</Link>
            <Link to="/support" className="hover:text-primary transition-colors">Suporte</Link>
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
import { useState } from "react";
import { Search, MapPin, Calendar, DollarSign, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const PostRequestPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Poste Um Pedido
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Não encontrou o que precisa? Publique seu pedido e deixe a comunidade te ajudar a encontrar o item perfeito.
          </p>
        </div>

        {/* How it Works */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6">
            <Search className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">1. Descreva o Item</h3>
            <p className="text-muted-foreground">Conte o que você procura, quando precisa e onde está localizado</p>
          </Card>
          
          <Card className="text-center p-6">
            <Users className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">2. Receba Ofertas</h3>
            <p className="text-muted-foreground">Proprietários interessados entrarão em contato com ofertas</p>
          </Card>
          
          <Card className="text-center p-6">
            <DollarSign className="h-12 w-12 text-bright-blue mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">3. Escolha e Alugue</h3>
            <p className="text-muted-foreground">Compare ofertas e feche o negócio com o melhor proprietário</p>
          </Card>
        </div>

        {/* Request Form */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Publique Seu Pedido</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="item-title">O que você está procurando?</Label>
              <Input id="item-title" placeholder="Ex: Furadeira de impacto para reforma" />
            </div>
            
            <div>
              <Label htmlFor="category">Categoria</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione uma categoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="photography">Fotografia</SelectItem>
                  <SelectItem value="tools">Ferramentas e Equipamentos</SelectItem>
                  <SelectItem value="camping">Ar-Livre e Acampamento</SelectItem>
                  <SelectItem value="events">Festa & Eventos</SelectItem>
                  <SelectItem value="sports">Esportes e Recreação</SelectItem>
                  <SelectItem value="electronics">Eletrônicos</SelectItem>
                  <SelectItem value="vehicles">Veículos</SelectItem>
                  <SelectItem value="home">Casa e Jardim</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="description">Descrição Detalhada</Label>
              <Textarea 
                id="description" 
                placeholder="Descreva especificamente o que precisa, para qual finalidade, características técnicas..."
                rows={4}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="start-date">Data de Início</Label>
                <Input id="start-date" type="date" />
              </div>
              <div>
                <Label htmlFor="end-date">Data de Término</Label>
                <Input id="end-date" type="date" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="budget">Orçamento Máximo (R$/dia)</Label>
                <Input id="budget" type="number" placeholder="50" />
              </div>
              <div>
                <Label htmlFor="location">Sua Localização</Label>
                <Input id="location" placeholder="Cidade, Bairro" />
              </div>
            </div>
            
            <Button className="w-full btn-hero">
              Publicar Pedido Gratuitamente
            </Button>
          </CardContent>
        </Card>

        {/* Recent Requests */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Pedidos Recentes da Comunidade</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold">Drone para filmagem de casamento</h3>
                <span className="text-sm text-muted-foreground">2 horas atrás</span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Preciso de um drone profissional para filmagem de casamento no próximo sábado...
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-bright-blue">📍 Vila Madalena, SP</span>
                <span className="text-sm font-semibold text-primary">R$ 100/dia</span>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold">Mesa de som para evento</h3>
                <span className="text-sm text-muted-foreground">5 horas atrás</span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Organizando festa de aniversário e preciso de uma mesa de som com 8 canais...
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-bright-blue">📍 Copacabana, RJ</span>
                <span className="text-sm font-semibold text-primary">R$ 80/dia</span>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PostRequestPage;
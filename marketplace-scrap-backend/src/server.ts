// Importa a biblioteca Express
import express from 'express';
// Importa a função config do dotenv para carregar variáveis de ambiente
import { config } from 'dotenv';
// Importa as rotas de autenticação que criamos
import authRoutes from './routes/authRoutes';

import userRoutes from './routes/userRoutes';

// Executa a configuração do dotenv para carregar o arquivo .env
config();

// Cria uma instância da aplicação Express
const app = express();
// Define a porta do servidor, pegando da variável de ambiente ou usando 3000 como padrão
const PORT = process.env.PORT || 3000;

// Adiciona o middleware para fazer o parse de corpos de requisição em JSON
app.use(express.json());

// Monta as rotas de autenticação no prefixo '/api/auth'
// Ex: /api/auth/register, /api/auth/login
app.use('/api/auth', authRoutes);

// Inicia o servidor para escutar na porta definida
app.listen(PORT, () => {
  // Exibe uma mensagem no console quando o servidor estiver rodando
  console.log(`Servidor rodando na porta ${PORT}`);
app.use('/api/users', userRoutes); // Rotas protegidas
});

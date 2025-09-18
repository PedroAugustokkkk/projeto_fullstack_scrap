// Importa a classe Pool da biblioteca 'pg'
import { Pool } from 'pg';
// Importa a função config do 'dotenv' para carregar variáveis de ambiente
import { config } from 'dotenv';

// Executa a função de configuração do dotenv
config();

// Cria uma nova instância do Pool de conexões
const pool = new Pool({
  // A string de conexão é obtida da variável de ambiente DATABASE_URL
  connectionString: process.env.DATABASE_URL,
});

// Exporta um objeto com um método 'query' para interagir com o banco
export default {
  // O método 'query' executa uma consulta SQL no banco de dados
  query: (text: string, params: any[]) => pool.query(text, params),
};
-- Cria a tabela de usuários se ela ainda não existir
CREATE TABLE IF NOT EXISTS users (
    -- Chave primária do tipo UUID para garantir unicidade
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    -- Nome do usuário, campo obrigatório
    name VARCHAR(255) NOT NULL,
    -- Email do usuário, campo único e obrigatório
    email VARCHAR(255) UNIQUE NOT NULL,
    -- Hash da senha, campo obrigatório
    password_hash VARCHAR(255) NOT NULL,
    -- Data de criação do registro, com valor padrão para o tempo atual
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
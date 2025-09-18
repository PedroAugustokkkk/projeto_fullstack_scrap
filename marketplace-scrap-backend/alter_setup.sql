-- Adiciona a coluna para o CPF, garantindo que seja única
-- O ideal é adicionar uma validação de formato no backend antes de salvar
ALTER TABLE users ADD COLUMN cpf VARCHAR(14) UNIQUE;

-- Adiciona a coluna para o número de telefone
ALTER TABLE users ADD COLUMN phone_number VARCHAR(20);

-- Adiciona colunas estruturadas para o endereço
ALTER TABLE users ADD COLUMN address_street VARCHAR(255);
ALTER TABLE users ADD COLUMN address_number VARCHAR(20);
ALTER TABLE users ADD COLUMN address_complement VARCHAR(100);
ALTER TABLE users ADD COLUMN address_city VARCHAR(100);
ALTER TABLE users ADD COLUMN address_state VARCHAR(50);
ALTER TABLE users ADD COLUMN address_zip_code VARCHAR(10);

-- Torna as novas colunas obrigatórias (exceto complemento)
-- É importante fazer isso depois que a coluna foi adicionada
ALTER TABLE users ALTER COLUMN cpf SET NOT NULL;
ALTER TABLE users ALTER COLUMN phone_number SET NOT NULL;
ALTER TABLE users ALTER COLUMN address_street SET NOT NULL;
ALTER TABLE users ALTER COLUMN address_city SET NOT NULL;
ALTER TABLE users ALTER COLUMN address_state SET NOT NULL;
ALTER TABLE users ALTER COLUMN address_zip_code SET NOT NULL;
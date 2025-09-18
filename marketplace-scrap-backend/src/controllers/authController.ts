// Importa os tipos Request e Response do Express para tipagem
import { Request, Response } from 'express';
// Importa a biblioteca bcryptjs para hashing de senhas
import bcrypt from 'bcryptjs';
// Importa a biblioteca jsonwebtoken para gerar tokens
import jwt from 'jsonwebtoken';
// Importa nosso módulo de banco de dados
import db from '../db';

// A função de login permanece a mesma, então não vou repeti-la aqui.
// ... (código da função login)

// Função ATUALIZADA para registrar um novo usuário
export const register = async (req: Request, res: Response) => {
  // Extrai todos os campos necessários do corpo da requisição
  const {
    // Dados básicos que já tínhamos
    name,
    email,
    password,
    // Novos dados do usuário
    cpf,
    phoneNumber,
    // Novos dados de endereço
    addressStreet,
    addressNumber,
    addressComplement,
    addressCity,
    addressState,
    addressZipCode,
  } = req.body;

  // Verifica se todos os campos obrigatórios foram enviados (complemento é opcional)
  if (
    !name || !email || !password || !cpf || !phoneNumber || !addressStreet ||
    !addressNumber || !addressCity || !addressState || !addressZipCode
  ) {
    // Retorna um erro 400 (Bad Request) se algum campo estiver faltando
    return res.status(400).json({ error: 'Todos os campos obrigatórios devem ser preenchidos.' });
  }

  try {
    // Verifica se já existe um usuário com o mesmo email ou CPF
    // Isso previne duplicidade de dados críticos
    const existingUser = await db.query(
      'SELECT * FROM users WHERE email = $1 OR cpf = $2',
      [email, cpf]
    );

    // Se um usuário com o mesmo email ou CPF for encontrado, retorna um erro 409 (Conflict)
    if (existingUser.rows.length > 0) {
      return res.status(409).json({ error: 'Email ou CPF já cadastrado.' });
    }

    // Gera um 'salt' e faz o hash da senha para armazenamento seguro
    const salt = await bcrypt.genSalt(10);
    // Cria o hash da senha usando o salt gerado
    const password_hash = await bcrypt.hash(password, salt);

    // Define a query SQL de inserção com todos os novos campos
    const insertQuery = `
      INSERT INTO users (
        name, email, password_hash, cpf, phone_number,
        address_street, address_number, address_complement,
        address_city, address_state, address_zip_code
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
      RETURNING id, name, email;
    `;

    // Define os parâmetros para a query na ordem correta
    const params = [
      name, email, password_hash, cpf, phoneNumber,
      addressStreet, addressNumber, addressComplement,
      addressCity, addressState, addressZipCode,
    ];

    // Executa a query para inserir o novo usuário no banco de dados
    const newUser = await db.query(insertQuery, params);

    // Retorna uma resposta 201 (Created) com os dados básicos do novo usuário
    res.status(201).json(newUser.rows[0]);
  } catch (error) {
    // Em caso de erro no servidor, loga o erro e retorna uma mensagem genérica
    console.error(error);
    // Retorna um erro 500 (Internal Server Error)
    res.status(500).json({ error: 'Erro ao registrar usuário.' });
  }
};

// ... (cole a função login aqui, ela não precisa de alterações)
export const login = async (req: Request, res: Response) => {
    //...código inalterado
};
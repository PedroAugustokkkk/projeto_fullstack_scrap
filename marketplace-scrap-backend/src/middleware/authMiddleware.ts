// Importa os tipos Request, Response e NextFunction do Express
import { Request, Response, NextFunction } from 'express';
// Importa a biblioteca jsonwebtoken para verificar o token
import jwt from 'jsonwebtoken';

// Estendemos a interface Request do Express para poder adicionar a propriedade 'user'
interface AuthRequest extends Request {
  user?: { userId: string }; // Adicionamos um campo opcional 'user' que conterá o payload do token
}

// Chave secreta para verificar a assinatura dos tokens JWT (a mesma usada para criar)
const JWT_SECRET = process.env.JWT_SECRET || 'seu_segredo_super_secreto';

// A função do middleware de autenticação
export const protect = (req: AuthRequest, res: Response, next: NextFunction) => {
  // Inicializa a variável 'token'
  let token;

  // Verifica se o cabeçalho 'authorization' existe e começa com 'Bearer'
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // 1. Extrai o token do cabeçalho
      // O formato é "Bearer TOKEN_LONGO", então pegamos a segunda parte
      token = req.headers.authorization.split(' ')[1];

      // 2. Verifica e decodifica o token
      // A função 'verify' checa se o token é válido usando a nossa chave secreta
      const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };

      // 3. Adiciona os dados do usuário (o payload do token) ao objeto 'req'
      // Isso permite que as próximas funções na cadeia (os controllers) saibam quem é o usuário logado
      req.user = decoded;

      // 4. Chama a próxima função no ciclo da requisição
      // Se tudo estiver certo, a requisição continua para o controller da rota
      next();
    } catch (error) {
      // Se o token for inválido (expirado, assinatua errada, etc.), jwt.verify lança um erro
      console.error('Erro de autenticação:', error);
      // Retorna um erro 401 (Não Autorizado)
      res.status(401).json({ error: 'Não autorizado, token falhou.' });
    }
  }

  // Se não houver token no cabeçalho, retorna um erro 401
  if (!token) {
    res.status(401).json({ error: 'Não autorizado, nenhum token encontrado.' });
  }
};

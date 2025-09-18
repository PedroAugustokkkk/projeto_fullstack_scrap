// Importa o objeto Router do Express para criar rotas modulares
import { Router } from 'express';
// Importa as funções de controller que criamos
import { register, login } from '../controllers/authController';

// Cria uma nova instância do Router
const router = Router();

// Define a rota POST para '/register' e a associa com a função 'register'
router.post('/register', register);

// Define a rota POST para '/login' e a associa com a função 'login'
router.post('/login', login);

// Exporta o router para ser usado no arquivo principal do servidor
export default router;
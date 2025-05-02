import { json } from 'body-parser';
import cors from 'cors';
import express from 'express';
import errorHandler from './middlewares/error';
import routes from './routes';

const app = express();

// Middlewares globais
app.use(cors());
app.use(json());

// API Routes
app.use('/api', routes);

// Middleware de tratamento de erros (deve estar após as rotas)
app.use(errorHandler);

export { app };

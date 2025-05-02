import http from 'http';
import { app } from './app';
import { startDatabase } from './config/database';
import setupSocket from './config/socket';
import { logError, logInfo } from './utils/logger';

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

const startServer = async () => {
  try {
    await startDatabase();

    // Configurar Socket.io com servidor HTTP existente
    const io = setupSocket(app);

    server.listen(PORT, () => {
      logInfo(`Server is running on http://localhost:${PORT}`);
    });
    logInfo('Database connected');
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logError(`Error connecting to the database: ${errorMessage}`);
    process.exit(1);
  }
};

startServer();

import http from 'http';
import { app } from './app';
import { startDatabase } from './config/database';
import setupSocket from './config/socket';
import { mockChatDatabase } from './models/Chat';

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

const startServer = async () => {
  try {
    await startDatabase();

    setupSocket(server);

    await mockChatDatabase();

    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
      console.log(`Socket.IO is initialized`);
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error(`Error starting server: ${errorMessage}`);
    process.exit(1);
  }
};

startServer();

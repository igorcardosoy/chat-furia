import dotenv from 'dotenv';
import pg from 'pg';
import { Sequelize } from 'sequelize';

dotenv.config();

// POSTGRES
const sequelize = new Sequelize(
  process.env.DB_NAME || 'chat_furia',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASSWORD || 'postgres',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    port: Number(process.env.DB_PORT) || 5432,
    logging: false,
  }
);

const createDatabase = async () => {
  try {
    const conection = new pg.Client({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      port: Number(process.env.DB_PORT) || 5432,
    });

    await conection.connect();

    // Verifica se o banco já existe antes de tentar criar
    const checkDb = await conection.query(
      `SELECT 1 FROM pg_database WHERE datname = '${
        process.env.DB_NAME || 'chat_furia'
      }'`
    );

    if (checkDb.rowCount === 0) {
      await conection.query(
        `CREATE DATABASE ${process.env.DB_NAME || 'chat_furia'}`
      );
      console.log(
        `Database ${process.env.DB_NAME || 'chat_furia'} created successfully.`
      );
    } else {
      console.log(
        `Database ${process.env.DB_NAME || 'chat_furia'} already exists.`
      );
    }

    await conection.end();
  } catch (error) {
    console.error(
      `Error with database: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
};

export const setupModels = async () => {
  // Importar modelos após inicializar sequelize
  const User = require('../models/User').default;
  const Chat = require('../models/Chat').default;
  const Message = require('../models/Message').default;

  // Definir associações entre modelos
  User.hasMany(Message, { foreignKey: 'userId', as: 'messages' });
  Message.belongsTo(User, { foreignKey: 'userId', as: 'sender' });

  Chat.hasMany(Message, { foreignKey: 'chatId', as: 'messages' });
  Message.belongsTo(Chat, { foreignKey: 'chatId', as: 'chat' });
};

export const startDatabase = async () => {
  try {
    await createDatabase();
    await sequelize.authenticate();
    await setupModels();
    await sequelize.sync();
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
};

export default sequelize;

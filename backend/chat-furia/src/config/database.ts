import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

// POSTGRES
const sequelize = new Sequelize(
  String(process.env.DB_NAME),
  String(process.env.DB_USER),
  String(process.env.DB_PASSWORD),
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: Number(process.env.DB_PORT) || 5432,
    logging: false,
  }
);

export const setupModels = async () => {
  const User = require('../models/User').default;
  const Chat = require('../models/Chat').default;
  const Message = require('../models/Message').default;

  User.hasMany(Message, { foreignKey: 'userId', as: 'messages' });
  Message.belongsTo(User, { foreignKey: 'userId', as: 'sender' });

  Chat.hasMany(Message, { foreignKey: 'chatId', as: 'messages' });
  Message.belongsTo(Chat, { foreignKey: 'chatId', as: 'chat' });
};

export const startDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');

    await sequelize.sync({ alter: true });
    console.log('Database models synchronized');

    return sequelize;
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    throw error;
  }
};

export default sequelize;

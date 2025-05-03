import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

interface MessageAttributes {
  id: number;
  content: string;
  userId: number;
  username?: string;
  chatId: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface MessageCreationAttributes {
  content: string;
  userId: number; // Mudado para number
  chatId: number; // Mudado para number
}

class Message
  extends Model<MessageAttributes, MessageCreationAttributes>
  implements MessageAttributes
{
  public id!: number;
  public content!: string;
  public userId!: number;
  public chatId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Message.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    chatId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'messages',
    modelName: 'Message',
    timestamps: true,
  }
);

import Chat from './Chat';
import User from './User';

Message.belongsTo(User, { foreignKey: 'userId', as: 'sender' });
Message.belongsTo(Chat, { foreignKey: 'chatId', as: 'chat' });

export default Message;

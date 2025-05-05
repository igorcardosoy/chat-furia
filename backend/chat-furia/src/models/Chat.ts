import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Chat extends Model {
  public id!: number;
  public name!: string;
  public users?: string[];
  public createdAt!: Date;
  public updatedAt!: Date;
}

Chat.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    users: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'chats',
    timestamps: true,
  }
);

export const mockChatDatabase = async () => {
  try {
    await Chat.create({
      id: 1,
      name: 'geral',
      description: 'Chat geral',
    });
    await Chat.create({
      id: 2,
      name: 'lol',
      description: 'Chat sobre League of Legends',
    });
    await Chat.create({
      id: 3,
      name: 'valorant',
      description: 'Chat sobre Valorant',
    });
    await Chat.create({
      id: 4,
      name: 'cs2',
      description: 'Chat sobre Counter-Strike 2',
    });
    await Chat.create({
      id: 5,
      name: 'rocket-league',
      description: 'Chat sobre Rocket League',
    });
    await Chat.create({
      id: 6,
      name: 'xadrez',
      description: 'Chat sobre Xadrez',
    });
    console.log('Mock data created successfully');
  } catch (error) {
    console.error(
      'Unable to create mock data, probably because the database is already populated:',
      error
    );
  }
};

export default Chat;

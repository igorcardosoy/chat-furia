import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Chat extends Model {
  public id!: number;
  public name!: string;
  public users!: string[]; // Adicionado campo de usuários
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

export default Chat;

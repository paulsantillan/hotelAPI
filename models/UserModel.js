import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";
import { TypeUsersModel } from "./TypeUsersModel.js";
import { PersonsModel } from "./PersonsModel.js";
export const UserModel = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      ci:{
        type: DataTypes.STRING,
      allowNull: true,
      },
      celular:{
        type: DataTypes.STRING,
      allowNull: true,
      }
  },
  {
    timestamps: false,
  }
);

TypeUsersModel.hasMany(UserModel, { foreignKey: "typeusers_id" });
UserModel.belongsTo(TypeUsersModel, { foreignKey: "typeusers_id" });
PersonsModel.hasMany(UserModel, { foreignKey: "person_id" });
UserModel.belongsTo(PersonsModel, { foreignKey: "person_id" });
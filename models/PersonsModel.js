import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";

export const PersonsModel = sequelize.define("persons",{
    id:{
        autoIncrement:true,
        primaryKey:true,
        type: DataTypes.INTEGER,
    },
    date: {
        type: DataTypes.STRING,
        allowNull: true,
    },
   
    country: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: true,
    },
   
},
{
    timestamps:false
}
)

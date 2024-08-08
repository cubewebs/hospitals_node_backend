import { DataTypes } from "sequelize";
import db from '../../db/connection';

const Hospital = db.define('hospital', {
    id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    },
    category: {
        type: DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false
});

export default Hospital;
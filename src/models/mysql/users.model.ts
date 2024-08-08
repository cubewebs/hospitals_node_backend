import {DataTypes} from "sequelize";
import db from '../../db/connection';

const User = db.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'user'
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    street: {
        type: DataTypes.STRING,
        allowNull: true
    },
    stNumber: {
        type: DataTypes.STRING,
        allowNull: true
    },
    door: {
        type: DataTypes.STRING,
        allowNull: true
    },
    zip: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    city: {
        type: DataTypes.STRING,
        allowNull: true
    },
    state: {
        type: DataTypes.STRING,
        allowNull: true
    },
    country: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    createdAt: false,
    updatedAt: false
});

export default User;
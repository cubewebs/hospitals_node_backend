"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../../db/connection"));
const User = connection_1.default.define('user', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
        defaultValue: 'user'
    },
    phone: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    avatar: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    street: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    stNumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    door: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    zip: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    city: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    state: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    country: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    }
}, {
    createdAt: false,
    updatedAt: false,
});
exports.default = User;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize(process.env.DB_DATABASE || 'railway', 'root', {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'dKuvKxKSzQrFGEsrcFmJpLxqdzFwwWFl',
    database: process.env.DB_DATABASE || 'railway',
    dialect: 'mysql'
});
exports.default = sequelize;

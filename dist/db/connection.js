"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('hospitals_db', 'root', '', {
    host: process.env.DB_HOST ?? 'localhost',
    username: process.env.DB_USER ?? 'root',
    password: process.env.DB_PASSWORD ?? '',
    database: process.env.DB_DATABASE ?? 'hospitals_db',
    port: process.env.DB_PORT ?? '3306',
    dialect: 'mysql'
});
exports.default = sequelize;

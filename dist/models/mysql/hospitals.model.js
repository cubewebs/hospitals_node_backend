"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../../db/connection"));
const Hospital = connection_1.default.define('hospital', {
    id: {
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    address: {
        type: sequelize_1.DataTypes.STRING
    },
    image: {
        type: sequelize_1.DataTypes.STRING
    },
    category: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Hospital;

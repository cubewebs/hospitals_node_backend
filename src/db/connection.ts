import { Sequelize } from "sequelize";

const sequelize: Sequelize = new Sequelize('railway', 'root', 'dKuvKxKSzQrFGEsrcFmJpLxqdzFwwWFl', {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    dialect: 'mysql',
})

export default sequelize;
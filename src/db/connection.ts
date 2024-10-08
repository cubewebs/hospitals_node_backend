import { Sequelize } from "sequelize";

const sequelize: Sequelize = new Sequelize('railway', 'root', 'ehqXzgWqwxbfJWleeMHtbKounaSajIkJ', {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    dialect: 'mysql',
})

export default sequelize;
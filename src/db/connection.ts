import { Sequelize} from "sequelize";

const sequelize = new Sequelize('hospitals_db', 'root', '', {
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'johnnypassword',
    database: process.env.DB_DATABASE || 'hospitals_db',
    dialect: 'mysql'
})

export default sequelize;
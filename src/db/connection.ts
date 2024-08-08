import { Sequelize} from "sequelize";

const sequelize = new Sequelize(process.env.DB_DATABASE || 'railway', 'root', process.env.DB_PASSWORD || 'dKuvKxKSzQrFGEsrcFmJpLxqdzFwwWFl', {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'dKuvKxKSzQrFGEsrcFmJpLxqdzFwwWFl',
    database: process.env.DB_DATABASE || 'railway',
    dialect: 'mysql'
})

export default sequelize;
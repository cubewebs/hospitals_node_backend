import { Sequelize} from "sequelize";

const sequelize = new Sequelize('hospitals_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default sequelize;
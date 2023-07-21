import Sequelize from 'sequelize'


dotenv.config()

const hostname = process.env.HOSTNAME || '127.0.0.1'
const username = process.env.BDUSER || 'postgres'
const password = process.env.PASSWORD || 'UWAz1olEbgaBBlvLa7Cw'
const database = process.env.DATABASE || 'cursos'
const port = process.env.DBPORT || 8003
const dialect = process.env.DIALECT || 'postgres'

const sequelize = new Sequelize(database, username, password, {
    host: hostname,
    port,
    dialect: dialect,
    operatorAliases: false,
    ssl: {rejectUnauthorized: false},
    pool: {
        max: 10,
        min: 0,
        acquire: 20000,
        idle: 5000
    }
})


export default sequelize
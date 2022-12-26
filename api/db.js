import * as dotenv from 'dotenv'
import mysql from "mysql"

dotenv.config()
export const db = mysql.createPool({
    connectionLimit: 10,
    host: process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})


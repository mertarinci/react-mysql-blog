import mysql from "mysql"



export const db = mysql.createPool({
    connectionLimit: 10,
    host: "145.14.156.192",
    user: "u223769533_blogroot",
    password: "4084Mertob!",
    database: "u223769533_blog"
})


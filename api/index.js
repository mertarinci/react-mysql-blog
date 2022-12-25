import express from "express"
import PostsRouter from "./routes/posts.js"
import AuthRouter from "./routes/auth.js"
import UsersRouter from "./routes/users.js"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"

dotenv.config()
const app = express()


// Middlewares
app.use(cookieParser())
app.use(express.json())
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))

// Routers
app.use("/api/posts", PostsRouter)
app.use("/api/auth", AuthRouter)
app.use("/api/users", UsersRouter)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server Listening ${PORT}`)
})
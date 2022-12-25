import express from "express"
import PostsRouter from "./routes/posts.js"
import AuthRouter from "./routes/auth.js"
import UsersRouter from "./routes/users.js"
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.use(express.json())

// Routers
app.use("/api/posts", PostsRouter)
app.use("/api/auth", AuthRouter)
app.use("/api/users", UsersRouter)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server Listening ${PORT}`)
})
import express from "express";
import jwt from "jsonwebtoken"
const app = express()
const PORT = 3001
app.use(express.json())

// auth
import { auth, JWT_SECRET_KEY } from "./middlewares/auth.js";

// databases
import { User, Todo } from "./models/db.js";

//.sign up
app.post("/signup", async function(req, res) {

    const {name, email, password} = req.body

    const user = await User.create({
        name: name,
        email: email,
        password: password
    })

    res.json({
        message: "You are signed up", 
        user
    })
})

//.sign in
app.post("/signin", async function(req, res) {
    const {email, password} = req.body

    const response = await User.findOne({email, password})

    if(response) {
        const token =  jwt.sign({id: response._id.toString()}, JWT_SECRET_KEY)    

        res.json({
            message: "You are signed in", 
            token
        })
    } else {
        res.status(403).json({
            message: "Invalid creds"
        })
    }

})

//.create-todo 
app.post("/todo", auth, async function(req, res) {
    const userId = req.userId
    const {title, done} = req.body

    const todo = await Todo.create({
        userId,
        title, 
        done,
    })

    res.json({
        message: "Todo created", 
    })
})

//.show-todo
app.get("/todos", auth, async (req, res) => {
    const userId = req.userId

    const todos = await Todo.findOne({userId})
    res.json({
        todos
    })
})

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
    
})
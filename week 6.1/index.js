const express = require("express")
const jwt = require("jsonwebtoken")
const path = require("path")
const JWT_SECRET = "gopalLoveGayatri"
const app = express()
const PORT = 3000;
app.use(express.json())

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname,"./public/index.html"))
    
})

let users = []

//.create User 
const createUser = (req, res) => {
    const {username, password} = req.body;
    
    if(username && password) {
        let userDetails = {
            username: username,
            password: password
        }
        users.push(userDetails)

    }

    
    return res.json({
        message: "User signed up successfully"
    })
}



//.find user
function findUser(req, res) {
    const {username, password} = req.body
    let foundUser = users.find(user => user.username == username && user.password == password)

    if(!foundUser) { 
        res.json({
            message:"Invalid credentials"
        })
    } else { 
        let token = jwt.sign({username}, JWT_SECRET)
        res.header("random", "Gopal")   

        return res.json({
            message: "Token created",
            token: token
        })


    }

    
}

//.verifyUser
function verifyUser(req, res) {
    const currentUser = req.username

    let foundUser = users.find((user) => user.username == currentUser)

    res.json({
        username: foundUser.username,
        password: foundUser.password
    })
} 

//.auth
function auth(req, res, next) {
    const token = req.headers.token
    const decodedData = jwt.verify(token, JWT_SECRET)

    if(decodedData.username) {
        req.username = decodedData.username
        next()
    } else {
        res.json({
            message: "You need to login"
        })
    }
}


app.post("/signup", createUser)

app.post("/signin", findUser)

app.get("/me", auth, verifyUser)



app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    
})
const express = require("express")
const jwt = require("jsonwebtoken")
const JWT_SECRET = "gopalLoveGayatri"
const app = express()
const PORT = 3000;
app.use(express.json())

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

    console.log(users);
    
    return res.json({
        message: "User signed up successfully"
    })
}



//.find user
function findUser(req, res) {
    const {username, password} = req.body

    let token = jwt.sign({username}, JWT_SECRET)

    return res.json({
        message: "Token created",
        token: token
    })
}

//.verifyUser
function verifyUser(req, res) {
    const token = req.headers.token
    const decodedInformation = jwt.verify(token, JWT_SECRET)


    let foundUser = users.find((user) => user.username == decodedInformation.username)

    if(foundUser) {
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    } else {
        res.json({
            message: "User not found"
        })
    }
} 


app.post("/signup", createUser)

app.post("/signin", findUser)

app.get("/me", verifyUser)



app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    
})
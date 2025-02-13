import jwt from "jsonwebtoken"
const JWT_SECRET_KEY = "gopal@06"

function auth(req, res, next) {
    const token = req.headers.authorization
    const response = jwt.verify(token, JWT_SECRET_KEY)

    if(response) {
        req.userId = response.id
        next()
    } else {
        res.status(403).json({
            message: "Invalid credentials"
        })
    }

}

export {auth, JWT_SECRET_KEY}
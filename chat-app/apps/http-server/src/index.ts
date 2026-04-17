import express from 'express'
const app = express()
import { PrismaClient } from '@prisma/client'

const client = new PrismaClient()

app.get("/chat", (req, res) => {
    res.send("This is chat room")
})


app.listen(3001, () => {
    console.log(`app is running on port 3001`);

})
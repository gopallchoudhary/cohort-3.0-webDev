import { app } from "./app";
import connectDb from "./db/db";
const PORT = 5001


connectDb()
.then(() => {
    app.listen(PORT, () => {
        console.log(`App is listening on port ${PORT}`);
    })
})
.catch((err) => {
    console.log("MongoDb connection error: ", err);
    
})
import { app } from "./app.js";
import connectDb from "./db/db.js";
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
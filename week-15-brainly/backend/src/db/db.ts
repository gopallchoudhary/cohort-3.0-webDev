import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect("mongodb://127.0.0.1:27017/brainly")
        console.log("mongo db connected successfully! connection host: ", connectionInstance.connection.host);

    } catch (error) {
        console.log("Mongo db connection error: ", error);
        process.exit(1)

    }
}

export default connectDb
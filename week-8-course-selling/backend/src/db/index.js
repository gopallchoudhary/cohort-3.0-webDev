import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const connectionInstace = await mongoose.connect("mongodb://127.0.0.1:27017/week-7-course-selling-app")
        console.log(`MongoDB connected! connection host: ${connectionInstace.connection.host}`);

        
    } catch (error) {
        console.log("MongoDB connection error: ", error)
        process.exit(1)
    }
}

export default connectDB
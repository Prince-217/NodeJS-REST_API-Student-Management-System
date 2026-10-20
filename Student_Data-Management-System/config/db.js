import mongoose from "mongoose";

const connectDB = async () => {
    try {
        let res = await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDB connected : ", res.connection.host);

    } catch (error) {
        console.log("MongoDB connection error : ", error);
    }
}

export default connectDB;
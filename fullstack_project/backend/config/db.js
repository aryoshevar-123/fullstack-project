import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
    if (isConnected) {
        console.log("=> Use the available database");
        return;
    }

    if (!process.env.MONGO_URI) {
        console.error("Error: MONGO_URI is not found");
        return;
    }
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {serverSelectionTimeoutMS: 5000});
        isConnected = conn.connections[0].readyState;

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error){
        console.error(`Error: ${error.message}`);
        throw error;
    }
};
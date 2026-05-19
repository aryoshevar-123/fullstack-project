// import mongoose from "mongoose";

// export const connectDB = async () => {
//     try{
//         const conn = await mongoose.connect(process.env.MONGO_URI);
//         console.log(`MongoDB Connected: ${conn.connection.host}`);
//     } catch (error){
//         console.error(`Error: ${error.message}`);
//         process.exit(1); // process code 1 means exit with failure, 0 means success
//     }
// };
import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) {
    console.log("=> Using existing database connection");
    return;
  }

  try {
    // Berikan opsi timeout agar jika gagal, ia langsung memunculkan error, bukan stuck
    const db = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000, // Timeout setelah 5 detik jika gagal terhubung
    });

    isConnected = db.connections[0].readyState;
    console.log("=> New database connection established");
  } catch (error) {
    console.error("Mongoose connection error:", error.message);
    throw error; // Lempar error agar Vercel logs memunculkan pesan spesifiknya
  }
};
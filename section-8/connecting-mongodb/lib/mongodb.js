import mongoose from "mongoose";

const MONGODB_URI = "mongodb://admin:admin@localhost";

export default async function connectMongoDB() {
  // 1 = connected
  if (mongoose.connection.readyState === 1) {
    console.log("Already connected");
    return mongoose.connection.db;
  }

  // otherwise connect
  await mongoose.connect(MONGODB_URI, { bufferCommands: false });
  console.log("✔️ MongoDB connected");
  return mongoose.connection.db;
}

import mongoose from "mongoose";

function connectDB(connectionString) {
    return mongoose.connect(connectionString)
}

export default connectDB;
import mongoose from "mongoose";

function connectDB(connectionString) {
    mongoose.connect(connectionString).then(() => {
    console.log("MongoDB Succeccfully Connected");
    }).catch(err => {
        console.log("Error: ", err);
    });
}

export default connectDB;
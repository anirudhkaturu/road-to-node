import express from "express";
import connectDB from "./configdb.js";
import urlRouter from "./routes/url.route.js";

const PORT = 8080;
const app = express();
const MONGO_DB = "mongodb://localhost:27017/url-shortner-node";

app.use(express.json());

app.use("/url", urlRouter);
app.get("/", (req, res) => {
    return res.send("WELCOME");
})

connectDB(MONGO_DB);
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
import express from "express";

const app = express(); // instane of express
const db = []; // inmemory store for the names of /users route

app.get("/", (req, res)  => {
    return res.send("HELLO");
});

app.get("/about", (req, res) => {
    return res.send("ABOUT PAGE");
});

app.get("/users", (req, res) => {
    db.push(req.query.u);
    return res.send(`Hey ${req.query.u}`);
});

app.get("/all-users", (req, res) => {
    //req.query accesses the request body - query paramater section
    return res.send(db.toString());
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server has stared on http://localhost:${PORT}`);
});

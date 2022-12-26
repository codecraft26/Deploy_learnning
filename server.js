// server.js
require("dotenv").config();
const express = require("express");

const connectDB = require("./config/db");

const app = express();
require("dotenv").config({
    path:"./config/.env"
})
// routes
const todo = require("./routes/todo"); // added

// connect database
connectDB();

// initialize middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));

// use routes
app.use("/api", todo); // added

// setting up port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});
const mongoose = require("mongoose");
require("dotenv").config()
const db = "mongodb://localhost:27017/amanTodo"

const connectDB = async () => {
    try {
        await mongoose.connect(process.env. DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        

        console.log("MongoDB is connected");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
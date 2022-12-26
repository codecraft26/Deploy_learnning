// models/todo.js
const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    title: {
        type: "String",
        required: true,
    },
    description: {
        type: "String",
    },
    createdAt:{
        type: Date,
    default: Date.now,
    }
});

const Todo = mongoose.model("todo", TodoSchema);

module.exports = Todo;
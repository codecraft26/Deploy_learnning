// routes/todo.js
const express = require("express");
const router = express.Router();

const {
    getAllTodo,
    postCreateTodo,
    putUpdateTodo,
    deleteTodo,
} = require("../controllers/todo");


router.get("/get", getAllTodo);


router.post("/post", postCreateTodo);


router.put("/:id", putUpdateTodo);


router.delete("/:id", deleteTodo);

module.exports = router;
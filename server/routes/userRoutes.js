const express = require('express')

const {

    getEmployeedData,
    getProfileData,
    getUserTodos,
    createNewTodo,
    deleteTodo,
    updateTodo

} = require("../controllers/userController.js")

const router = express.Router()

router.get("/dashboard", getEmployeedData)
router.get("/profile", getProfileData)
router.get("/todos", getUserTodos)
router.post("/todos/create", createNewTodo)
router.delete("/todos/delete", deleteTodo)
router.patch("/todos/update", updateTodo)


module.exports = router
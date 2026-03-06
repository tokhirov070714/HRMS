const express = require('express')

const {

    getEmployeedData,
    getProfileData,
    getUserTodos

} = require("../controllers/userController.js")

const router = express.Router()

router.get("/dashboard", getEmployeedData)
router.get("/profile", getProfileData)
router.get("/todos", getUserTodos)

module.exports = router
const express = require('express')
const { register, login, logout, getCurrentUser, checkUserName } = require('../controllers/authController.js')
const router = express.Router()

router.post('/register', register);
router.post('/login', login)
router.post('/logout', logout)
router.get('/me', getCurrentUser)
router.post("/verifyusername", checkUserName)

module.exports = router
const { PrismaClient } = require("../generated/prisma/index.js")
const prisma = new PrismaClient()
const bcrypt = require('bcryptjs')
const { generateToken, verifyToken } = require("../utils/jwt.js")

async function register(req, res) {

    try {

        const { firstName, surname, username, email, password, employeeType } = req.body
        console.log("GOT BODY")

        if (!firstName || !surname || !username || !email || !password || !employeeType) return res.status(400).json({ error: 'Missing fields' })

        const existingUser = await prisma.user.findUnique({

            where: { username: username }

        })

        console.log("CHECKING USER")

        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' })
        }

        const existingEmail = await prisma.user.findUnique({
            where: { email: email }
        })

        if (existingEmail) {
            return res.status(400).json({ error: 'Email already exists' })
        }


        console.log("USER CHECKED")

        const hash = await bcrypt.hash(password, 10)

        console.log("PASSWROD IS HASHED")

        if (hash) console.log("Hashed password: ", hash)

        const newUser = await prisma.user.create({

            data: {

                username: username,
                passwordHash: hash,
                firstName: firstName,
                lastName: surname,
                email: email,
                employeeType: employeeType

            }

        })

        console.log("CREATED NEW USER: ", newUser)

        const jwtToken = generateToken(newUser)

        res.cookie('token', jwtToken, {
            httpOnly: true,
            secure: false, // true in production
            maxAge: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
            sameSite: "lax"
        })

        return res.status(201).json({
            id: newUser.id,
            username: newUser.username,
            email: newUser.email,
            firstName: newUser.firstName,
            lastName: newUser.lastName
        })

    }
    catch (e) {

        console.error("Register error:", e)
        res.status(500).json({ error: "Error in register", details: e.message });

    }

}

async function login(req, res) {

    try {

        const { username, password } = req.body

        const user = await prisma.user.findUnique({
            where: { username: username },
            select: {
                id: true,
                username: true,
                email: true,
                firstName: true,
                lastName: true,
                passwordHash: true,
            }
        })

        if (!user) return res.status(401).json({ error: "Invalid credentials" })

        const isMatch = await bcrypt.compare(password, user.passwordHash)

        if (!isMatch) return res.status(401).json({ error: "Invalid credentials" })

        const jwtToken = generateToken(user)

        res.cookie('token', jwtToken, {

            httpOnly: true,
            secure: false, // true in production
            maxAge: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
            sameSite: "lax"

        })

        return res.status(200).json({
            message: "Logged in",
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName
            }
        })

    }
    catch (e) {

        res.status(500).json("Error in login")

    }


}

async function logout(req, res) {


    try {

        res.clearCookie('token', {
            httpOnly: true,
            secure: false,
            sameSite: "lax"
        })

        res.json({ message: "Logged out successfully" })

    }
    catch (e) {

        console.log("Error in logout: ", e)

    }

}

async function getCurrentUser(req, res) {

    const token = req.cookies.token

    if (!token) return res.status(401).json({
        authenticated: false,
        message: 'No token provided'
    })

    const verification = verifyToken(token)

    if (!verification.valid) {
        return res.status(401).json({
            authenticated: false,
            error: "Invalid token"
        })
    }

    const user = await prisma.user.findUnique({

        where: { id: verification.decoded.userId },

        select: {
            id: true,
            username: true,
            email: true,
            role: true
        }

    })

    if (!user) {
        return res.status(404).json({ error: 'User not found' })
    }

    res.status(200).json({
        authenticated: true,
        user
    })

}

async function checkUserName(req, res) {

    const { username } = req.body

    if (!username) {
        return res.status(400).json({ error: "Username is required" })
    }

    const usernameExists = await prisma.user.findUnique({
        where: { username: username }
    })

    if (usernameExists) return res.status(409).json({
        message: "Username is unavailable",
        available: false
    })

    res.status(200).json({ available: true })

}

module.exports = {

    register,
    login,
    logout,
    getCurrentUser,
    checkUserName

}


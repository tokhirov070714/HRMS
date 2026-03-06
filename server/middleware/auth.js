const { verifyToken } = require("../utils/jwt.js")

function requireAuth(req, res, next) {

    console.log("AUTH MIDDLEWARE HIT")
    console.log("Cookies:", req.cookies)

    const token = req.cookies.token
    if (!token) return res.status(401).json('No token')

    const verification = verifyToken(token)
    if (!verification.valid) return res.status(401).json('Invalid token')

    next()

}

module.exports = requireAuth
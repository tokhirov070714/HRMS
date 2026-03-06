const jwt = require("jsonwebtoken")

function generateToken(payload) {

    const thePayload = {
        userId: payload.id,
        email: payload.email
    }

    const secret = process.env.JWT_SECRET || "extra_backup"

    const expireTime = { expiresIn: "24h" }

    // jwt.sign() is a function provided by various JSON Web Token (JWT) 
    // libraries (such as jsonwebtoken in Node.js) 
    // used to create and digitally sign a JSON Web Token.


    return jwt.sign(thePayload, secret, expireTime)

}

function verifyToken(token) {

    const secret = process.env.JWT_SECRET || "extra_backup"

    try {

        // a function (commonly found in JWT libraries for various programming languages) 
        // used to securely authenticate and validate a JSON Web Token (JWT)

        const decoded = jwt.verify(token, secret)
        return { valid: true, decoded }

    }
    catch (e) {

        console.log("Error in verifyToken")
        return { valid: false, error: e.message }

    }

}

module.exports = { generateToken, verifyToken }
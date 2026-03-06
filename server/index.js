require('dotenv').config()

const express = require('express')
const cors = require('cors')
const { PrismaClient } = require("./generated/prisma/index.js")
const cookieParser = require("cookie-parser")
const PORT = 5500
const app = express()

// Routes
const authRoutes = require("./routes/authRoutes.js")
const adminRoutes = require("./routes/adminRoutes.js")
const aiRoutes = require('./routes/aiRoutes.js')
const userRoutes = require("./routes/userRoutes.js")

app.use(cors({

    origin: "http://localhost:3000",
    credentials: true

}))

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/admin", adminRoutes)
app.use('/api/ai', aiRoutes)
app.use('/api/employee', userRoutes)

const prisma = new PrismaClient()

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`)
    console.log(`📝 API endpoints available at http://localhost:${PORT}/api`)
})




process.on('SIGINT', async () => {
    await prisma.$disconnect();
    process.exit(0);
})
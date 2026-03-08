const { PrismaClient } = require("../generated/prisma/index.js")
const prisma = new PrismaClient()


async function getEmployeedData(req, res) {

    try {


        const { userId } = req.query

        console.log("USER ID ", userId)

        const user = await prisma.user.findUnique({

            where: { id: userId },

            select: {

                id: true,
                firstName: true,
                lastName: true,
                email: true,
                profilePictureUrl: true,
                academicPosition: true,
                administrativePosition: true,
                employeeType: true,
                city: true,

                school: {

                    select: { schoolName: true }

                }

            }

        })

        const todos = await prisma.todo.findMany({

            where: { userId: userId },

            select: {

                id: true,
                title: true,
                description: true,
                status: true,
                completedAt: true,
                createdAt: true

            }

        })

        const events = await prisma.event.findMany({

            select: {
                description: true,
                id: true,
                location: true,
                startTime: true,
                title: true
            },

            take: 3

        })

        return res.status(200).json({ user, todos, events })

    } catch (e) {

        console.log("Error in /employee/dashboard")

    }
}

async function getProfileData(req, res) {
    try {

        const { employeeId } = req.query

        if (!employeeId) {
            return res.status(400).json("Missing employee id")
        }

        const employee = await prisma.user.findUnique({
            where: { id: employeeId },

            select: {
                // --- Basic profile ---
                profilePictureUrl: true,
                role: true,
                username: true,
                firstName: true,
                lastName: true,
                email: true,
                phoneForeign: true,
                phoneLocal: true,
                addressForeign: true,
                addressLocal: true,
                isLocal: true,
                bio: true,
                country: true,
                city: true,
                cityForeign: true,
                countryForeign: true,
                dateOfBirth: true,

                // --- Employment info ---
                baseSalary: true,

                school: {
                    select: { schoolName: true }
                },

                department: {
                    select: { departmentName: true }
                },

                administrativePosition: true,
                academicPosition: true,

                // --- Emergency contacts ---
                emergencyContacts: {
                    select: {
                        contactName: true,
                        relationship: true,
                        phonePrimary: true,
                        email: true
                    }
                }
            }
        })

        if (!employee) {
            return res.status(404).json("Employee not found")
        }

        const fullProfile = {
            ...employee,
            fullName: `${employee.firstName} ${employee.lastName}`
        }

        res.status(200).json(fullProfile)

    } catch (e) {
        console.log("Error in employee profile:", e)
        res.status(500).json("Server error")
    }
}

async function getUserTodos(req, res) {

    try {

        const { employeeId } = req.query

        if (!employeeId) return res.status(500).json("Missing employee id")

        console.log("GOT EMPLOYEE ID")

        const todos = await prisma.todo.findMany({

            where: { userId: employeeId },

            select: {

                id: true,
                title: true,
                description: true,
                status: true

            }

        })

        return res.status(200).json(todos)

    } catch (e) {

        console.log("Error in /employee/todos")
        console.log(e)

    }

}

async function createNewTodo(req, res) {

    try {

        const { employeeId } = req.query
        const { title, description, status } = req.body

        if (!title | !description | !status) {

            return res.status(500).json("Missing parameters")

        }

        const userId = await prisma.user.findUnique({

            where: { id: employeeId }

        })

        if (!userId) return res.status(500).json("Invalid userId")

        const todo = await prisma.todo.create({

            data: {

                userId: employeeId,
                title: title,
                description: description,
                status: status

            }

        })

        return res.status(200).json(todo)



    } catch (e) {

        console.log("Error in createNewTodo ", e)
        return res.status(500).json(e)

    }

}

async function deleteTodo(req, res) {

    try {

        const { employeeId } = req.query
        const { todoId } = req.body

        if (!employeeId | !todoId) {

            return res.status(500).json("Missing parameters")

        }

        const user = await prisma.user.findUnique({ where: { id: employeeId } })

        if (!user) return res.status(500).json("Invalid employee id")

        const todo = await prisma.todo.delete({

            where: { userId: employeeId, id: todoId }

        })

        return res.status(200).json(todo)

    } catch (e) {

        console.log("Error in deleteTodo", e)

    }

}

async function updateTodo(req, res) {
    try {

        const { employeeId } = req.query;
        const { title, description, status, todoId } = req.body;

        if (!todoId || !employeeId) {
            return res.status(400).json({
                error: "todoId and userId are required"
            });
        }

        const user = await prisma.user.findUnique({ where: { id: employeeId } })

        if (!user) return res.status(500).json("Invalid employee id")

        // Update only if todo belongs to the user
        const result = await prisma.todo.updateMany({
            where: {
                id: String(todoId),
                userId: String(employeeId)
            },
            data: {
                title,
                description,
                status
            }
        })

        return res.json({
            success: true,
            message: "Todo updated successfully",
            data: result
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "Internal server error"
        });
    }
};

module.exports = {

    getEmployeedData,
    getProfileData,
    getUserTodos,
    createNewTodo,
    deleteTodo,
    updateTodo

}
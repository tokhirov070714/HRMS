const { PrismaClient } = require("../generated/prisma/index.js")
const prisma = new PrismaClient()

async function getDashboardData(req, res) {

    try {

        const schools = await prisma.school.findMany({
            take: 5,
            select: {
                id: true,
                schoolName: true,
                icon: true
            }
        })

        const schoolsCount = await prisma.school.count()

        const employees = await prisma.user.findMany({
            where: {
                NOT: { role: "ADMIN" },
            },
            take: 4,
            select: {
                id: true,
                firstName: true,
                lastName: true,
                status: true,
                profilePictureUrl: true,
                department: {
                    select: { departmentName: true },
                },
                administrativePosition: true,
                academicPosition: true,
            },
        })

        const localEmployees = await prisma.user.findMany({
            where: {
                NOT: { role: "ADMIN" },
                isLocal: true
            },
            select: { id: true },
        })

        const internationalEmployees = await prisma.user.findMany({
            where: {
                NOT: { role: "ADMIN" },
                isLocal: false
            },
            select: { id: true },
        })

        const events = await prisma.event.findMany({

            select: {
                description: true,
                id: true,
                location: true,
                startTime: true,
                title: true
            },

        })

        res.status(200).json({ schools, schoolsCount, employees, localEmployees, internationalEmployees, events })

    } catch (e) {
        console.log("Error in admin api dashboard: ", e)
    }

}

async function getEmployeeData(req, res) {

    try {

        const internationalEmployeesCount = await prisma.user.count({
            where: {
                NOT: { role: "ADMIN" },
                isLocal: false
            },
        })

        const localEmployeesCount = await prisma.user.count({
            where: {
                NOT: { role: "ADMIN" },
                isLocal: true
            },
        })

        const employees = await prisma.user.findMany({
            where: {
                NOT: { role: "ADMIN" },
            },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                status: true,
                profilePictureUrl: true,
                email: true,
                department: {
                    select: { departmentName: true },
                },
            },
        })

        const departments = await prisma.department.findMany({
            select: {
                id: true,
                departmentName: true,
                _count: {
                    select: { users: true },
                },
            },
        })

        res.status(200).json({ localEmployeesCount, internationalEmployeesCount, employees, departments })

    } catch (e) {
        console.log("Error in admin api employee: ", e)
    }

}

async function getSchoolData(req, res) {

    try {

        const schools = await prisma.school.findMany({
            select: {
                id: true,
                schoolName: true,
                icon: true,

                _count: {
                    select: {
                        users: true
                    }
                },

                schoolHead: {
                    select: {
                        user: {
                            select: {
                                firstName: true,
                                lastName: true,
                                profilePictureUrl: true
                            },
                        },
                    },
                },
            },
            orderBy: {
                schoolName: "asc",
            },
        })

        const totalSchools = schools.length
        const largestSchool = schools.reduce((max, s) => s._count.users > (max?._count.users ?? 0) ? s : max, schools[0] ?? null)
        const avgSize = totalSchools > 0
            ? Math.round(schools.reduce((sum, s) => sum + s._count.users, 0) / totalSchools)
            : 0

        res.status(200).json({
            schools,
            totalSchools,
            largestSchool,
            avgSize,
        })

    } catch (e) {
        console.log("Error in admin api school: ", e)
    }

}

async function getDepartmentData(req, res) {

    try {

        const { schoolId } = req.params

        if (!schoolId) res.status(500).json("Missing school id")

        const schoolName = await prisma.school.findUnique({

            where: { id: schoolId },

            select: { schoolName: true }

        })

        const schoolHead = await prisma.school_Head.findUnique({
            where: { schoolId: schoolId },

            select: {
                user: {
                    select: {
                        id: true,
                        profilePictureUrl: true,
                        firstName: true,
                        lastName: true,
                        email: true,
                        phoneLocal: true,
                        phoneForeign: true
                    }
                }
            }
        })

        const departments = await prisma.department.findMany({

            where: { schoolId: schoolId },

            select: {

                departmentName: true,
                icon: true,
                description: true,

                _count: {
                    select: {
                        users: true
                    }
                }

            }

        })

        return res.status(200).json({ schoolName, schoolHead, departments })



    } catch (e) {

        console.log("Error in admin api school: ", e)

    }

}

async function getEmployeeProfile(req, res) {
    try {
        const { employeeId } = req.params

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

async function getSchoolNames(req, res) {

    try {

        const schools = await prisma.school.findMany({

            select: { id: true, schoolName: true }

        })

        return res.status(200).json(schools)

    } catch (e) {

        console.log("Error in schools/names", e)

    }

}

async function getDepartmentNames(req, res) {

    try {

        const { schoolId } = req.params

        if (!schoolId) res.status(500).json("Missing school id")

        console.log("FOUND ID")

        const departmentNames = await prisma.department.findMany({

            where: { schoolId: schoolId },

            select: { id: true, departmentName: true }

        })

        console.log(departmentNames)

        return res.status(200).json(departmentNames)

    } catch (e) {

        console.log("Error in departments/names", e)

    }

}

async function getFreeDeans(req, res) {

    try {

        const deansWithoutSchool = await prisma.user.findMany({
            where: {
                role: "SCHOOL_HEAD",
                schoolId: null,
            },
            select: { id: true, firstName: true, lastName: true }
        })

        return res.status(200).json(deansWithoutSchool)

    } catch (e) {

        console.log("Error in /admin/schools/freedeans")

    }

}

async function getEvents(req, res) {

    try {

        const events = await prisma.event.findMany({

            select: {
                description: true,
                id: true,
                location: true,
                startTime: true,
                title: true
            },

        })

        res.status(200).json(events)

    } catch (e) {

        console.log("Error in getEvents ", e)

    }

}

async function createEvent(req, res) {
    try {
        const { title, description, location, startTime } = req.body;

        // Validation
        if (!title || !startTime) {
            return res.status(400).json({
                error: 'Title and start time are required'
            });
        }

        const event = await prisma.event.create({
            data: {
                title,
                description: description || null,
                location: location || null,
                startTime: new Date(startTime),
            },
            select: {
                description: true,
                id: true,
                location: true,
                startTime: true,
                title: true
            }
        });

        res.status(201).json({
            message: 'Event created successfully',
            event
        });
    } catch (error) {
        console.error('Error creating event:', error);
        res.status(500).json({
            error: 'Failed to create event'
        });
    }
}

// Delete an event
async function deleteEvent(req, res) {
    try {
        const { id } = req.params;

        await prisma.event.delete({
            where: { id }
        });

        res.status(200).json({
            message: 'Event deleted successfully'
        });
    } catch (error) {
        console.error('Error deleting event:', error);
        res.status(500).json({
            error: 'Failed to delete event'
        });
    }
}

module.exports = {
    getDashboardData,
    getEmployeeData,
    getSchoolData,
    getDepartmentData,
    getEmployeeProfile,
    getSchoolNames,
    getDepartmentNames,
    getFreeDeans,
    getEvents,
    createEvent,
    deleteEvent
}
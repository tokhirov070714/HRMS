const express = require('express')

const {

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

} = require("../controllers/adminController.js")

const router = express.Router()


router.get("/dashboard", getDashboardData)

router.get("/employees", getEmployeeData)
router.get("/employees/:employeeId", getEmployeeProfile)

router.get("/schools", getSchoolData)
router.get("/schools/names", getSchoolNames)

router.get("/schools/freedeans", getFreeDeans)

router.get("/:schoolId/departments/names", getDepartmentNames)
router.get("/schools/:schoolId", getDepartmentData)

router.get("/events", getEvents)
router.post("/events", createEvent)
router.delete("/events/:id", deleteEvent)

module.exports = router
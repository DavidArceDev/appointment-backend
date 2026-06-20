const express = require('express')

const router = express.Router()

const appointmentController = require('./appointment.controller')

router.post('/schedule-appointment', appointmentController.scheduleAppointment)

router.get('/', appointmentController.findAll)

router.get('/:professionalId/get-professional-schedule', appointmentController.getProfessionalSchedule)

module.exports = router
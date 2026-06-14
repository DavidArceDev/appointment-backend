const express = require('express')

const router = express.Router()

const appointmentController = require('./appointment.controller')

router.post('/', appointmentController.create)

router.get('/', appointmentController.findAll)

module.exports = router
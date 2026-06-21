const express = require('express')

const router = express.Router()

const bookingController = require('./booking.controller')


router.get('/specialties', bookingController.getSpecialties)

router.get('/professionals/specialty/:specialtyId', bookingController.getProfessionalsBySpecialty) //

module.exports = router
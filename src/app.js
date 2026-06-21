const express = require('express')
const cors = require('cors')

const appointmentRoutes = require('./appointments/appointment.routes') // appointments
const authRoutes = require('./auth/auth.routes') // auth
const bookingRoutes = require('./booking/booking.routes') // booking

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/appointments', appointmentRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/booking', bookingRoutes)

module.exports = app
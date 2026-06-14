const express = require('express')
const cors = require('cors')

const appointmentRoutes = require('./appointments/appointment.routes')
const authRoutes = require('./auth/auth.routes') // auth

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/appointments', appointmentRoutes)

app.use('/api/auth', authRoutes)

module.exports = app
const appointmentService = require('./appointment.service')

/**
 * Creación de nueva cita
 * @param {*} req 
 * @param {*} res 
 */
const scheduleAppointment = async (req, res) => {
    try {
        const result = await appointmentService.scheduleAppointment(req.body)

        res.status(201).json(result)
    }
    catch (error) {
        console.error(error)

        res.status(500).json({
            message: error.message
        })
    }
}

const findAll = async (req, res) => {
    try {
        const result =
            await appointmentService.findAll()

        res.json(result)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

/**
 * Obtiene la agenda de un profesional
 * @param {*} req 
 * @param {*} res 
 */
const getProfessionalSchedule = async (req, res) => {
    try {
        const professionalId = req.params.professionalId
        const result = await appointmentService.getProfessionalSchedule(professionalId)

        res.json(result)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    scheduleAppointment,
    findAll,
    getProfessionalSchedule
}
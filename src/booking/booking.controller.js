const bookingService = require('./booking.service')

/**
 * Creación de nueva cita
 * @param {*} req 
 * @param {*} res 
 */
const getSpecialties = async (req, res) => {
    try {
        const result = await bookingService.getSpecialties()

        res.status(201).json(result)
    }
    catch (error) {
        console.error(error)

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
const getProfessionalsBySpecialty = async (req, res) => {
    try {
        const specialtyId = req.params.specialtyId
        const result = await bookingService.getProfessionalsBySpecialty(specialtyId)

        res.json(result)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    getSpecialties,
    getProfessionalsBySpecialty
}
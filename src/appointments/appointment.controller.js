const appointmentService = require('./appointment.service')

const create = async (req, res) => {
    try {
        const result = await appointmentService.create(req.body)

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

module.exports = {
    create,
    findAll
}
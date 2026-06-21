const appointmentRepository = require('./appointment.repository')

const scheduleAppointment = async (appointment) => {
    return appointmentRepository.scheduleAppointment(appointment)
}

const findAll = async () => {
    return appointmentRepository.findAll()
}

const getProfessionalSchedule = async (professionalId) => {
    return appointmentRepository.getProfessionalSchedule(professionalId)
}

module.exports = {
    scheduleAppointment,
    findAll,
    getProfessionalSchedule
}
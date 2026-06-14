const appointmentRepository = require('./appointment.repository')

const create = async (appointment) => {

  // Aquí irá la lógica de negocio

  return appointmentRepository.create(appointment)
}

const findAll = async () => {
  return appointmentRepository.findAll()
}

module.exports = {
  create,
  findAll
}
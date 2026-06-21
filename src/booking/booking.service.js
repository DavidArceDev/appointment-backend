const bookingRepository = require('./booking.repository')

const getSpecialties = async () => {
    return bookingRepository.getSpecialties()
}

const getProfessionalsBySpecialty = async (specialtyId) => {
    return bookingRepository.getProfessionalsBySpecialty(specialtyId)
}

module.exports = {
    getSpecialties,
    getProfessionalsBySpecialty
}
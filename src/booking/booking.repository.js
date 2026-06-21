const pool = require('../config/db')

const getSpecialties = async () => {
    const result = await pool.query(`
        SELECT *
        FROM professional_specialty
    `)

    return result.rows
}



const getProfessionalsBySpecialty = async (specialtyId) => {
    const result = await pool.query(`
        SELECT *
        FROM appointment.get_professionals_by_specialty($1)
        `, [specialtyId]
    )
    return result.rows
}

module.exports = {
    getSpecialties,
    getProfessionalsBySpecialty
}
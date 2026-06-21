const pool = require('../config/db')

const scheduleAppointment = async ({
    professional_id,
    patient_id,
    start_time,
    end_time,
    notes
}) => {

    const result = await pool.query(
        `
        SELECT *
        FROM appointment.create_appointment($1, $2, $3, $4, $5)
        `, [
        professional_id,
        patient_id,
        start_time,
        end_time,
        notes
    ]
    )

    if (result.rows[0].out_code != 3000) {
        throw new Error(result.rows[0].out_message)
    }

    return result.rows[0]
}

const findAll = async () => {
    const result = await pool.query(`
    SELECT *
    FROM appointments
    ORDER BY start_time
  `)

    return result.rows
}

const getProfessionalSchedule = async (professionalId) => {
    const result = await pool.query(
        `
        SELECT *
        FROM appointment.get_available_slots($1)
        `, [professionalId]
    )

    return result.rows
}

module.exports = {
    scheduleAppointment,
    findAll,
    getProfessionalSchedule
}
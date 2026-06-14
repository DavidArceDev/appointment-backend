const pool = require('../config/db')

const create = async ({
    professional_id,
    patient_id,
    start_time,
    end_time,
    notes
}) => {
    const result = await pool.query(
        `
    INSERT INTO appointments
    (
      professional_id,
      patient_id,
      start_time,
      end_time,
      notes
    )
    VALUES ($1,$2,$3,$4,$5)
    RETURNING *
    `,
        [
            professional_id,
            patient_id,
            start_time,
            end_time,
            notes
        ]
    )

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

module.exports = {
    create,
    findAll
}
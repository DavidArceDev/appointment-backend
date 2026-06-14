const pool = require('../config/db')

const findPatientByEmail = async (email) => {

  const result = await pool.query(
    `
    SELECT *
    FROM patients
    WHERE email = $1
    `,
    [email]
  )

  return result.rows[0]
}

const createPatient = async (
  patient
) => {

  const result = await pool.query(
    `
    INSERT INTO patients
    (
      name,
      last_name,
      email,
      password
    )
    VALUES
    (
      $1,
      $2,
      $3,
      $4
    )
    RETURNING
      id,
      name,
      last_name,
      email
    `,
    [
      patient.name,
      patient.last_name,
      patient.email,
      patient.password,
    ]
  )

  return result.rows[0]
}

module.exports = {
  findPatientByEmail,
  createPatient,
}
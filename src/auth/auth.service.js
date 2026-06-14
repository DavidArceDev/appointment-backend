const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const authRepository =
  require('./auth.repository')


// registro
const register = async (data) => {

  const exists =
    await authRepository
      .findPatientByEmail(
        data.email
      )

  if (exists) {
    throw new Error(
      'Email ya registrado'
    )
  }

  const hashedPassword =
    await bcrypt.hash(
      data.password,
      10
    )

  return authRepository
    .createPatient({
      ...data,
      password: hashedPassword,
    })
}

// login

const login = async (
  email,
  password
) => {

  const patient =
    await authRepository
      .findPatientByEmail(
        email
      )

  if (!patient) {
    throw new Error(
      'Credenciales inválidas'
    )
  }

  const valid =
    await bcrypt.compare(
      password,
      patient.password
    )

  if (!valid) {
    throw new Error(
      'Credenciales inválidas'
    )
  }

  const token =
    jwt.sign(
      {
        id: patient.id,
        email: patient.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '7d',
      }
    )

  return {
    token,
    patient: {
      id: patient.id,
      name: patient.name,
      email: patient.email,
    },
  }
}



module.exports = {
  register,
  login
}
const authService =
  require('./auth.service')

// register
const register =
  async (req, res) => {

  try {

    const result =
      await authService
        .register(
          req.body
        )

    res.status(201)
      .json(result)

  } catch (error) {

    res.status(400)
      .json({
        message:
          error.message,
      })
  }
}

// login
const login =
  async (req, res) => {

  try {

    const result =
      await authService
        .login(
          req.body.email,
          req.body.password
        )

    res.json(result)

  } catch (error) {

    res.status(401)
      .json({
        message:
          error.message,
      })
  }
}

module.exports = {
  register,
  login
}
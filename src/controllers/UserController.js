const User = require("../models/User")

module.exports = {
  async createUser(req, res) {
    console.log(req.body)
    const { name, email, password, phone, sexo } = req.body
  
    const user = await User.create({
      name,
      email,
      password,
      phone,
      sexo
    })

    return res.status(201).json(user)
  }
}

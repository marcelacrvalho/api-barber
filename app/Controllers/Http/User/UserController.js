'use strict'

const User = use('App/Models/User')

class UserController {
  async index({ request, response, view }) {
    const users = await User.query().fetch()
    return response.send(users)
  }

  async store({ request, response }) {
    try {
      const { username, email, password } = request.all()
      const user = await User.create({ username, email, password })
      return response.status(201).send(user)
    } catch (error) {
      return response.status(400).send({ message: 'Por favor, tente novamente!' })
    }
  }

  async show({ params: { id }, request, response, view }) {
    const user = await User.findOrFail(id).fetch()
    return response.send(user)
  }

  async destroy({ params: { id }, request, response }) {
    const user = await User.findOrFail(id)
    await user.delete()
    return response.status(204).send({ message: 'Deletado com sucesso!' })
  }
}

module.exports = UserController
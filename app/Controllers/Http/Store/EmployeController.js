'use strict'

const Employe = use('App/Models/Employe')

class EmployeController {
  async index({ request, response, view }) {
    const employes = await Employe.query().with('ocuppation').fetch()
    return response.send(employes)
  }

  async show({ params: { id }, request, response, view }) {
    const employe = await Employe.findOrFail(id).with('ocuppation').fetch()
    return response.send(employe)
  }

  async destroy({ params: { id }, request, response }) {
    const store = await Employe.findOrFail(id)
    await store.delete()
    return response.status(204).send({ message: 'Deletado com sucesso!' })
  }
}

module.exports = EmployeController
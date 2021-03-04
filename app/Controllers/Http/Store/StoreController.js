'use strict'

const Store = use('App/Models/Store')

class StoreController {
  async index({ request, response, view }) {
    const stores = await Store.query().with('employes').fetch()
    return response.send(stores)
  }

  async store({ request, response }) {
    try {
      const { name, latitude, longitude, phone } = request.all()
      const store = await Store.create({ name, latitude, longitude, phone })
      return response.status(201).send(store)
    } catch (error) {
      return response.status(400).send({ message: 'Por favor, tente novamente!' })
    }
  }

  async show({ params: { id }, request, response, view }) {
    const store = await Store.findOrFail(id).with('employe').fetch()
    return response.send(store)
  }

  async destroy({ params: { id }, request, response }) {
    const store = await Store.findOrFail(id)
    await store.delete()
    return response.status(204).send({ message: 'Deletado com sucesso!' })
  }
}

module.exports = StoreController
'use strict'

const Store = use('App/Models/Store')

class StoreController {
  async index({ request, response, view }) {
    const stores = await Store.query().with('employes').fetch()
    return response.send(stores)
  }

  async show({ params: { id }, request, response, view }) {
    const store = await Store.findOrFail(id).with('employes').fetch()
    return response.send(store)
  }
}

module.exports = StoreController
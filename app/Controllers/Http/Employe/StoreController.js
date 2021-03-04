'use strict'

const Store = use('App/Models/Store')

class StoreController {
  async index({ request, response, view }) {
    const stores = await Store.query().fetch()
    return response.send(stores)
  }

  async show({ params: { id }, request, response, view }) {
    const schedule = await Store.findOrFail(id).with('employe').fetch()
    return response.send(schedule)
  }
}

module.exports = StoreController
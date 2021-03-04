'use strict'

const Employe = use('App/Models/Employe')

class StoreController {
  async index({ request, response, view }) {
    const employes = await Employe.query().with('store').with('ocuppation').fetch()
    return response.send(employes)
  }

  async show({ params: { id }, request, response, view }) {
    const store = await Employe.findOrFail(id).with('store').with('ocuppation').fetch()
    return response.send(store)
  }
}

module.exports = StoreController
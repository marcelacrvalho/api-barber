'use strict'

const Ocuppation = use('App/Models/Ocuppation')

class OcuppationController {
  async index({ request, response, view }) {
    const ocuppations = await Ocuppation.query().with('employe').fetch()
    return response.send(ocuppations)
  }

  async show({ params: { id }, request, response, view }) {
    const schedule = await Ocuppation.findOrFail(id).with('employe').fetch()
    return response.send(schedule)
  }
}

module.exports = OcuppationController
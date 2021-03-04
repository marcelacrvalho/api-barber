'use strict'

const Ocuppation = use('App/Models/Ocuppation')

class OcuppationController {
  async index({ request, response, view }) {
    const ocuppations = await Ocuppation.query().with('employe').witch('schedules').fetch()
    return response.send(ocuppations)
  }

  async store({ request, response }) {
    try {
      const { employe_id, ocuppation } = request.all()
      const schedule = await Ocuppation.create({ employe_id, ocuppation })
      return response.status(201).send(schedule)
    } catch (error) {
      return response.status(400).send({ message: 'Por favor, tente novamente!' })
    }
  }

  async show({ params: { id }, request, response, view }) {
    const schedule = await Ocuppation.findOrFail(id).with('employe').with('schedules').fetch()
    return response.send(schedule)
  }

  async update({ params: { id }, request, response }) {
    const ocuppation = await Ocuppation.findOrFail(id)
    const { employe_id, ocuppation } = request.only()
    ocuppation.merge({ employe_id, ocuppation })
    await ocuppation.save()
    return response.send(ocuppation)
  }

  async destroy({ params: { id }, request, response }) {
    const store = await Ocuppation.findOrFail(id)
    await store.delete()
    return response.status(204).send({ message: 'Deletado com sucesso!' })
  }
}

module.exports = OcuppationController
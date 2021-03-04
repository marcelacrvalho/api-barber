'use strict'

const Schedule = use('App/Models/Schedule')

class ScheduleController {
  
  async index({ request, response, view }) {
    const schedules = await Schedule.query().with('employe').with('ocuppation').fetch()
    return response.send(schedules)
  }

  async store({ request, response }) {
    try {
      const { user_id, ocuppation_id, employe_id, date } = request.all()
      const schedule = await Schedule.create({ user_id, ocuppation_id, employe_id, date })
      return response.status(201).send(schedule)
    } catch (error) {
      return response.status(400).send({ message: 'Por favor, tente novamente!' })
    }
  }

  async show({ params: { id }, request, response, view }) {
    const schedule = await Schedule.findOrFail(id).with('employe').with('ocuppation').fetch()
    return response.send(schedule)
  }

  async destroy({ params: { id }, request, response }) {
    const store = await Schedule.findOrFail(id)
    await store.delete()
    return response.status(204).send({ message: 'Deletado com sucesso!' })
  }
}

module.exports = ScheduleController
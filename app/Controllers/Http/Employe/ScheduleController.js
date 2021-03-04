'use strict'

const Schedule = use('App/Models/Schedule')

class ScheduleController {
  async index({ request, response, view }) {
    const schedules = await Schedule.query().with('ocuppation').fetch()
    return response.send(schedules)
  }

  async show({ params: { id }, request, response, view }) {
    const schedule = await Schedule.findOrFail(id).with('ocuppation').fetch()
    return response.send(schedule)
  }

  async destroy({ params: { id }, request, response }) {
    const store = await Schedule.findOrFail(id)
    await store.delete()
    return response.status(204).send({ message: 'Deletado com sucesso!' })
  }
}

module.exports = ScheduleController
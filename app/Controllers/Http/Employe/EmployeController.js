'use strict'

const Employe = use('App/Models/Employe')

class EmployController {
    async index({ request, response, view }) {
        const employes = await Employe.query().with('store').with('ocuppation').with('schedules').fetch()
        return response.send(employes)
    }

    async store({ request, response }) {
        try {
            const { store_id, user_id, firs_name, last_name } = request.all()
            const store = await Employe.create({ store_id, user_id, firs_name, last_name })
            return response.status(201).send(store)
        } catch (error) {
            return response.status(400).send({ message: 'Por favor, tente novamente!' })
        }
    }
    async show({ params: { id }, request, response, view }) {
        const employe = await Employe.findOrFail(id).with('store').with('ocuppation').with('schedules').fetch()
        return response.send(employe)
    }

    async update({ params: { id }, request, response }) {
        const employe = await Employe.findOrFail(id)
        const { store_id, user_id, firs_name, last_name } = request.only()
        employe.merge({ store_id, user_id, firs_name, last_name })
        await employe.save()
        return response.send(employe)
    }

    async destroy({ params: { id }, request, response }) {
        const employ = await Employe.findOrFail(id)
        await employ.delete()
        return response.status(204).send({ message: 'Deletado com sucesso!' })
    }
}

module.exports = EmployController
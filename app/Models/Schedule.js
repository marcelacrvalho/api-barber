'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Schedule extends Model {

    user() {
        return this.belongsTo('App/Models/User')
    }

    employe() {
        return this.belongsTo('App/Models/Employe')
    }

    ocuppation() {
        return this.belongsTo('App/Models/Ocuppation')
    }
}

module.exports = Schedule

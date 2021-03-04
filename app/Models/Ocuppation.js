'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Ocuppation extends Model {

    store() {
        return this.belongsTo('App/Models/Store')
    }

    schedules() {
        return this.hasMany('App/Models/Schedule')
    }
}

module.exports = Ocuppation

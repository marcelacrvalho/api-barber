'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Employe extends Model {

    user() {
        return this.belongsTo('App/Models/User')
    }

    store() {
        return this.belongsTo('App/Models/Store')
    }

    ocuppation() {
        return this.hasOne('App/Models/Ocuppation')
    }

    schedules() {
        return this.hasMany('App/Models/Schedule')
    }
}

module.exports = Employe

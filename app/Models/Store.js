'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Store extends Model {

    employes() {
        return this.hasMany('App/Models/Employe')
    }

    ocuppations() {
        return this.hasMany('App/Models/Ocuppation')
    }
}

module.exports = Store

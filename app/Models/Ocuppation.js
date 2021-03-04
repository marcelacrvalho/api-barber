'use strict'

const Model = use('Model')

class Ocuppation extends Model {

    employe() {
        return this.belongsTo('App/Models/Employe')
    }

    schedules() {
        return this.hasMany('App/Models/Schedule')
    }
}

module.exports = Ocuppation

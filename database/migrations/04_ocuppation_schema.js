'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OcuppationSchema extends Schema {
  up () {
    this.create('ocuppations', (table) => {
      table.increments()
      table.integer('employe_id').unsigned().notNullable()
      table.string('ocuppation', 35).notNullable()

      table.foreign('employe_id').references('id').inTable('employes').onDelete('cascade').onUpdate('cascade')
    })
  }

  down () {
    this.drop('ocuppations')
  }
}

module.exports = OcuppationSchema

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OcuppationSchema extends Schema {
  up () {
    this.create('ocuppations', (table) => {
      table.increments()
      table.integer('store_id').unsigned().notNullable()
      table.string('ocuppation', 35).notNullable()

      table.foreign('store_id').references('id').inTable('stores').onDelete('cascade').onUpdate('cascade')
    })
  }

  down () {
    this.drop('ocuppations')
  }
}

module.exports = OcuppationSchema

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmployeSchema extends Schema {
  up () {
    this.create('employes', (table) => {
      table.increments()
      table.integer('store_id').unsigned().notNullable()
      table.integer('user_id').unsigned().notNullable()
      table.string('first_name', 20).notNullable()
      table.string('last_name', 30).notNullable()

      table.foreign('store_id').references('id').inTable('stores').onDelete('cascade').onUpdate('cascade')
      table.foreign('user_id').references('id').inTable('users').onDelete('cascade').onUpdate('cascade')
    })
  }

  down () {
    this.drop('employes')
  }
}

module.exports = EmployeSchema

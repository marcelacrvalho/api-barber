'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ScheduleSchema extends Schema {
  up () {
    this.create('schedules', (table) => {
      table.increments()
      table.integer('user_id').unsigned().notNullable()
      table.integer('ocuppation_id').unsigned().notNullable()
      table.integer('employe_id').unsigned().notNullable()
      table.date('date').notNullable()
      table.timestamps()

      table.foreign('user_id').references('id').inTable('users').onDelete('cascade').onUpdate('cascade')
      table.foreign('ocuppation_id').references('id').inTable('ocuppations').onDelete('cascade').onUpdate('cascade')
      table.foreign('employe_id').references('id').inTable('employes').onDelete('cascade').onUpdate('cascade')
    })
  }

  down () {
    this.drop('schedules')
  }
}

module.exports = ScheduleSchema

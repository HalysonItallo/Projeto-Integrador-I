'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HoursSchema extends Schema {
  up () {
    this.create('hours', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('week_day', 50)
      table.string('grade', 50)
      table.string('hour', 50)
      table.unique(['week_day', 'hour']);
      table.timestamps()
    })
  }

  down () {
    this.drop('hours')
  }
}

module.exports = HoursSchema

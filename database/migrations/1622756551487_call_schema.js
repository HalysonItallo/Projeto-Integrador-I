'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CallSchema extends Schema {
  up () {
    this.create('calls', (table) => {
      table.increments()
      table
        .integer('teacher_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('status_teacher', 20).notNullable()
      table.string('status_student', 20).notNullable()
      table.integer('student_id').unique().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('calls')
  }
}

module.exports = CallSchema

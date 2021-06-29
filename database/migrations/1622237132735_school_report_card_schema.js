'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SchoolReportCardSchema extends Schema {
  up () {
    this.create('school_report_cards', (table) => {
      table.increments()
      table
        .integer('teacher_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('subjects', 100)
      table.string('grades', 100)
      table.integer('student_id').unique().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('school_report_cards')
  }
}

module.exports = SchoolReportCardSchema

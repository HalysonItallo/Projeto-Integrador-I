'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('name', 40).notNullable()
      table.string('full_name', 80).notNullable()
      table.string('RG', 10).unique()
      table.string('CPF', 15).unique()
      table.string('registration', 20).unique()
      table.string('road',80)
      table.string('district',80)
      table.string('number_house',80)
      table.string('email', 254).notNullable().unique()
      table.string('telephone', 20).notNullable()
      table.string('password', 60).notNullable()
      table.string('profile_picture', 500).notNullable()
      table.string('type', 20).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TypeSchema extends Schema {
  up () {
    this.create('types', table => {
      table.increments()
      table.string('name', 50).notNullable()
      table.string('description', 255).notNullable()
      table.string('time', 50).notNullable()
      table.string('image', 80).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('types')
  }
}

module.exports = TypeSchema

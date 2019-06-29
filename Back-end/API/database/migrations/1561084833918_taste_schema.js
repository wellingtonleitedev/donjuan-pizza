'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TasteSchema extends Schema {
  up () {
    this.create('tastes', table => {
      table.increments()
      table
        .integer('type_id')
        .notNullable()
        .references('id')
        .inTable('types')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('name').notNullable()
      table.string('image').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tastes')
  }
}

module.exports = TasteSchema

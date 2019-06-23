'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TasteSizeSchema extends Schema {
  up() {
    this.create('taste_sizes', (table) => {
      table.increments()
      table.integer('taste_id').notNullable().references('id').inTable('tastes').onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('size_id').notNullable().references('id').inTable('sizes').onUpdate('CASCADE').onDelete('CASCADE')
      table.decimal('price').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('taste_sizes')
  }
}

module.exports = TasteSizeSchema

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderProductsSchema extends Schema {
  up () {
    this.create('order_products', table => {
      table.increments()
      table
        .integer('order_id')
        .notNullable()
        .references('id')
        .inTable('orders')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('type_id')
        .notNullable()
        .references('id')
        .inTable('types')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('taste_id')
        .notNullable()
        .references('id')
        .inTable('tastes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('size_id')
        .notNullable()
        .references('id')
        .inTable('sizes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('order_products')
  }
}

module.exports = OrderProductsSchema

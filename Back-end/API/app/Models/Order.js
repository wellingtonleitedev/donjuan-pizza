'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {
  user () {
    return this.belongsTo('App/Models/User')
  }

  products () {
    return this.hasMany('App/Models/OrderProduct')
  }

  tastes () {
    return this.belongsToMany('App/Models/Taste').pivotTable('order_products')
  }

  sizes () {
    return this.belongsToMany('App/Models/Size').pivotTable('order_products')
  }
}

module.exports = Order

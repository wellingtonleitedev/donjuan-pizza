'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class OrderProduct extends Model {
  order () {
    return this.belongsTo('App/Models/Order')
  }

  tastes () {
    return this.belongsTo('App/Models/Taste')
  }
  size () {
    return this.belongsTo('App/Models/Size')
  }
}

module.exports = OrderProduct

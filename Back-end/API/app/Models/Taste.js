'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Taste extends Model {
  type() {
    return this.belongsTo('App/Models/Type')
  }

  sizes() {
    return this.belongsToMany('App/Models/Size')
      .pivotTable('taste_sizes')
      .withPivot(['price'])
  }
}

module.exports = Taste

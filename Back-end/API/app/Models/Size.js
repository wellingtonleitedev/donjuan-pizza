'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Size extends Model {
  tastes () {
    return this.belongsToMany('App/Models/Taste').pivotTable('taste_sizes')
  }
}

module.exports = Size

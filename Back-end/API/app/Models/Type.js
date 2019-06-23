'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Type extends Model {
  tastes() {
    return this.hasMany('App/Models/Taste')
  }
}

module.exports = Type

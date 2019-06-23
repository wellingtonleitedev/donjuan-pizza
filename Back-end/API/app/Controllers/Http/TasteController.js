'use strict'

const Taste = use('App/Models/Taste')
class TasteController {
  async index({ params }) {
    const { type } = params

    const tastes = await Taste.query().where('type_id', type).fetch()

    return tastes
  }
}

module.exports = TasteController

'use strict'

const Taste = use('App/Models/Taste')
const TasteSize = use('App/Models/TasteSize')
class SizeController {
  async index({ params }) {
    const tastes = await Taste.findOrFail(params.taste)
    await tastes.load('sizes')

    return tastes
  }
}

module.exports = SizeController

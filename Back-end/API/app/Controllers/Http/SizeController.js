'use strict'

const Taste = use('App/Models/Taste')

class SizeController {
  async index ({ params }) {
    const tastes = await Taste.findOrFail(params.taste)
    await tastes.load('type')
    await tastes.load('sizes')

    return tastes
  }
}

module.exports = SizeController

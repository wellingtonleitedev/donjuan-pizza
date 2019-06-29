'use strict'

const Taste = use('App/Models/Taste')

class ShoppingCartController {
  async store ({ params }) {
    const taste = await Taste.findOrFail(params.taste)
    await taste.load('type')
    await taste.load('sizes', builder => {
      builder.where('sizes.id', params.size)
    })

    return taste
  }
}

module.exports = ShoppingCartController

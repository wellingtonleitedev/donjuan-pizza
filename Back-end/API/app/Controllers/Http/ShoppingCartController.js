'use strict'

const Taste = use('App/Models/Taste')

class ShoppingCartController {
  async store ({ request }) {
    const data = request.only(['size_id', 'taste_id', 'price'])

    const taste = await Taste.findOrFail(data.taste_id)
    await taste.load('type')
    await taste.load('sizes', builder => {
      builder.where('sizes.id', data.size_id)
    })

    return taste
  }
}

module.exports = ShoppingCartController

'use strict'

const Order = use('App/Models/Order')

class OrderController {
  async index () {
    const orders = Order.query()
      .with('user')
      .with('products')
      .with('products.tastes')
      .with('products.size')
      .fetch()

    return orders
  }

  async store ({ request, auth }) {
    const data = request.only([
      'note',
      'cep',
      'street',
      'number',
      'neighborhood',
      'overall'
    ])

    const order = Order.create({ ...data, user_id: auth.user.id })

    return order
  }

  async show ({ auth }) {
    const orders = Order.query()
      .where('user_id', auth.user.id)
      .fetch()

    return orders
  }
}

module.exports = OrderController

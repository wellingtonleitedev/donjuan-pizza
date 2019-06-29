'use strict'

const OrderProduct = use('App/Models/OrderProduct')

class OrderProductController {
  async index ({ request, response, view }) {}
  async store ({ request }) {
    const data = request.only(['order_id', 'type_id', 'taste_id', 'size_id'])

    const product = OrderProduct.create(data)

    return product
  }
  async show ({ params, request, response, view }) {}
}

module.exports = OrderProductController

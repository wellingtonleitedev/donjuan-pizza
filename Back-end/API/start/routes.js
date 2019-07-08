'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('signup', 'UserController.store')
Route.get('user/:token', 'UserController.show')
Route.post('signin-app', 'SessionAppController.store')
Route.post('signin-web', 'SessionWebController.store')
Route.get('files/:file', 'FileController.show')

Route.group(() => {
  Route.get('types', 'TypeController.index')
  Route.get('tastes/:type', 'TasteController.index')
  Route.get('sizes/:taste', 'SizeController.index')
  Route.get('cart/:taste/:size', 'ShoppingCartController.store')
  Route.post('order', 'OrderController.store')
  Route.get('my-orders', 'OrderController.show')
  Route.get('orders', 'OrderController.index')
  Route.post('order-products', 'OrderProductController.store')
}).middleware(['auth'])

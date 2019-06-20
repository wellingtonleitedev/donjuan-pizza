'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('signup', 'UserController.store')
Route.get('user/:token', 'UserController.show')
Route.post('signin', 'SessionController.store')

Route.group(() => {
  Route.get('files/:file', 'FileController.show')
  Route.get('types', 'TypeController.index')
}).middleware(['auth'])

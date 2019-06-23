'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('signup', 'UserController.store')
Route.get('user/:token', 'UserController.show')
Route.post('signin', 'SessionController.store')
Route.get('files/:file', 'FileController.show')

Route.group(() => {
  Route.get('types', 'TypeController.index')
  Route.get('tastes/:type', 'TasteController.index')
  Route.get('sizes/:taste', 'SizeController.index')
}).middleware(['auth'])

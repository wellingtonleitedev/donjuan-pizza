'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', ({ request, response }) => {
  return console.log('Hello World')
})

Route.post('signup', 'UserController.store')
Route.post('signin', 'SessionController.store')

Route.get('files/:file', 'FileController.show')
Route.get('types', 'TypeController.index')

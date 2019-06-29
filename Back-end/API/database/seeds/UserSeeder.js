'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')
const Hash = use('Hash')

class UserSeeder {
  async run () {
    await Database.table('users').insert([
      {
        name: 'Administrador',
        email: 'adm@donjuan.com',
        password: await Hash.make('123456'),
        provider: true,
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  }
}

module.exports = UserSeeder

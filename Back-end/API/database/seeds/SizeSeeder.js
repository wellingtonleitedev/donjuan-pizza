'use strict'

/*
|--------------------------------------------------------------------------
| SizeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')

class SizeSeeder {
  async run () {
    await Database.table('sizes').insert([
      {
        size: 'Pequena',
        image: 'pequena.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        size: 'Média',
        image: 'media.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        size: 'Grande',
        image: 'grande.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        size: 'Gigante',
        image: 'gigante.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        size: '350ml',
        image: '350ml.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        size: '600ml',
        image: '600ml.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        size: '1L',
        image: '1l.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        size: '2L',
        image: '2l.png',
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  }
}

module.exports = SizeSeeder

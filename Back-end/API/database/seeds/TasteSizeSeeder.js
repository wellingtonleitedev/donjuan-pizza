'use strict'

/*
|--------------------------------------------------------------------------
| TasteSizeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')

class TasteSizeSeeder {
  async run () {
    await Database.table('taste_sizes').insert([
      {
        taste_id: 1,
        size_id: 1,
        price: 29,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        taste_id: 1,
        size_id: 2,
        price: 42,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        taste_id: 1,
        size_id: 3,
        price: 59,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        taste_id: 1,
        size_id: 4,
        price: 76,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        taste_id: 2,
        size_id: 1,
        price: 29,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        taste_id: 2,
        size_id: 2,
        price: 42,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        taste_id: 2,
        size_id: 3,
        price: 59,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        taste_id: 2,
        size_id: 4,
        price: 76,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        taste_id: 3,
        size_id: 1,
        price: 29,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        taste_id: 3,
        size_id: 2,
        price: 42,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        taste_id: 3,
        size_id: 3,
        price: 59,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        taste_id: 3,
        size_id: 4,
        price: 76,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        taste_id: 4,
        size_id: 1,
        price: 29,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        taste_id: 4,
        size_id: 2,
        price: 42,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        taste_id: 4,
        size_id: 3,
        price: 59,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        taste_id: 4,
        size_id: 4,
        price: 76,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        taste_id: 5,
        size_id: 1,
        price: 29,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        taste_id: 5,
        size_id: 2,
        price: 42,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        taste_id: 5,
        size_id: 3,
        price: 59,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        taste_id: 5,
        size_id: 4,
        price: 76,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        taste_id: 6,
        size_id: 1,
        price: 29,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        taste_id: 6,
        size_id: 2,
        price: 42,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        taste_id: 6,
        size_id: 3,
        price: 59,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        taste_id: 6,
        size_id: 4,
        price: 76,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        taste_id: 7,
        size_id: 1,
        price: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        taste_id: 7,
        size_id: 2,
        price: 20,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        taste_id: 8,
        size_id: 1,
        price: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        taste_id: 8,
        size_id: 2,
        price: 18,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        taste_id: 9,
        size_id: 1,
        price: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        taste_id: 9,
        size_id: 2,
        price: 25,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        taste_id: 10,
        size_id: 1,
        price: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        taste_id: 10,
        size_id: 2,
        price: 25,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        taste_id: 11,
        size_id: 5,
        price: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        taste_id: 11,
        size_id: 8,
        price: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        taste_id: 12,
        size_id: 5,
        price: 5.5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        taste_id: 12,
        size_id: 7,
        price: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        taste_id: 13,
        size_id: 5,
        price: 5.5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        taste_id: 13,
        size_id: 6,
        price: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        taste_id: 14,
        size_id: 5,
        price: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        taste_id: 14,
        size_id: 6,
        price: 7.5,
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  }
}

module.exports = TasteSizeSeeder

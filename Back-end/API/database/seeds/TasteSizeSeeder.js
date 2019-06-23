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
  async run() {
    await Database.table('taste_sizes').insert([
      {
        taste_id: 1,
        size_id: 1,
        price: 29
      },
      {
        taste_id: 1,
        size_id: 2,
        price: 42
      },
      {
        taste_id: 1,
        size_id: 3,
        price: 59
      },
      {
        taste_id: 1,
        size_id: 4,
        price: 76
      },
      {
        taste_id: 2,
        size_id: 1,
        price: 29
      },
      {
        taste_id: 2,
        size_id: 2,
        price: 42
      },
      {
        taste_id: 2,
        size_id: 3,
        price: 59
      },
      {
        taste_id: 2,
        size_id: 4,
        price: 76
      },
      {
        taste_id: 3,
        size_id: 1,
        price: 29
      },
      {
        taste_id: 3,
        size_id: 2,
        price: 42
      },
      {
        taste_id: 3,
        size_id: 3,
        price: 59
      },
      {
        taste_id: 3,
        size_id: 4,
        price: 76
      },
      {
        taste_id: 4,
        size_id: 1,
        price: 29
      },
      {
        taste_id: 4,
        size_id: 2,
        price: 42
      },
      {
        taste_id: 4,
        size_id: 3,
        price: 59
      },
      {
        taste_id: 4,
        size_id: 4,
        price: 76
      },
      {
        taste_id: 5,
        size_id: 1,
        price: 29
      },
      {
        taste_id: 5,
        size_id: 2,
        price: 42
      },
      {
        taste_id: 5,
        size_id: 3,
        price: 59
      },
      {
        taste_id: 5,
        size_id: 4,
        price: 76
      },
      {
        taste_id: 6,
        size_id: 1,
        price: 29
      },
      {
        taste_id: 6,
        size_id: 2,
        price: 42
      },
      {
        taste_id: 6,
        size_id: 3,
        price: 59
      },
      {
        taste_id: 6,
        size_id: 4,
        price: 76
      },
      {
        taste_id: 7,
        size_id: 1,
        price: 29
      },
      {
        taste_id: 7,
        size_id: 2,
        price: 42
      },
      {
        taste_id: 7,
        size_id: 3,
        price: 59
      },
      {
        taste_id: 7,
        size_id: 4,
        price: 76
      },
      {
        taste_id: 8,
        size_id: 1,
        price: 29
      },
      {
        taste_id: 8,
        size_id: 2,
        price: 42
      },
      {
        taste_id: 8,
        size_id: 3,
        price: 59
      },
      {
        taste_id: 8,
        size_id: 4,
        price: 76
      },
      {
        taste_id: 9,
        size_id: 1,
        price: 29
      },
      {
        taste_id: 9,
        size_id: 2,
        price: 42
      },
      {
        taste_id: 9,
        size_id: 3,
        price: 59
      },
      {
        taste_id: 9,
        size_id: 4,
        price: 76
      },
      {
        taste_id: 10,
        size_id: 1,
        price: 29
      },
      {
        taste_id: 10,
        size_id: 2,
        price: 42
      },
      {
        taste_id: 10,
        size_id: 3,
        price: 59
      },
      {
        taste_id: 10,
        size_id: 4,
        price: 76
      },
      {
        taste_id: 11,
        size_id: 5,
        price: 5
      },
      {
        taste_id: 11,
        size_id: 6,
        price: 6.50
      },
      {
        taste_id: 11,
        size_id: 8,
        price: 12
      },
      {
        taste_id: 12,
        size_id: 5,
        price: 5.50
      },
      {
        taste_id: 12,
        size_id: 7,
        price: 10
      },
      {
        taste_id: 13,
        size_id: 5,
        price: 5.50
      },
      {
        taste_id: 13,
        size_id: 6,
        price: 7
      },
      {
        taste_id: 13,
        size_id: 8,
        price: 9
      },
      {
        taste_id: 14,
        size_id: 5,
        price: 6
      },
      {
        taste_id: 14,
        size_id: 6,
        price: 7.50
      },
      {
        taste_id: 14,
        size_id: 7,
        price: 10
      },
    ])
  }
}

module.exports = TasteSizeSeeder

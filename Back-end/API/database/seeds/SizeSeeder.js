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
  async run() {
    await Database.table('sizes').insert([
      {
        size: "Pequena"
      },
      {
        size: "Média"
      },
      {
        size: "Grande"
      },
      {
        size: "Gigante"
      },
      {
        size: "350ml"
      },
      {
        size: "600ml"
      },
      {
        size: "1L"
      },
      {
        size: "2L"
      },
    ])
  }
}

module.exports = SizeSeeder

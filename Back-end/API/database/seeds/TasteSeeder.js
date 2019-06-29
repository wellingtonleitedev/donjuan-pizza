'use strict'

/*
|--------------------------------------------------------------------------
| TasteSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')

class TasteSeeder {
  async run () {
    await Database.table('tastes').insert([
      {
        type_id: 1,
        name: 'Portuguesa',
        image: 'portuguesa.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        type_id: 1,
        name: 'Calabresa',
        image: 'calabresa.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        type_id: 1,
        name: 'Frango Frito',
        image: 'frangofrito.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        type_id: 1,
        name: 'Marguerita',
        image: 'marguerita.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        type_id: 1,
        name: 'Legumes',
        image: 'legumes.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        type_id: 1,
        name: 'Quatro Queijos',
        image: 'quatroqueijos.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        type_id: 2,
        name: 'Lasanha',
        image: 'lasanha.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        type_id: 2,
        name: 'Macarronada',
        image: 'macarronada.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        type_id: 3,
        name: 'Calabreasa',
        image: 'calabreasa.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        type_id: 3,
        name: 'Frango Frito',
        image: 'frango.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        type_id: 4,
        name: 'Coca cola',
        image: 'cocacola.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        type_id: 4,
        name: 'Dell Valle',
        image: 'dellvalle.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        type_id: 5,
        name: 'Skol',
        image: 'skol.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        type_id: 5,
        name: 'Brahma',
        image: 'brahma.png',
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  }
}

module.exports = TasteSeeder

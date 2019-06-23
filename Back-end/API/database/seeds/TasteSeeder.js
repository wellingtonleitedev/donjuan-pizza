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
  async run() {
    await Database.table('tastes').insert([
      {
        type_id: 1,
        name: "Portuguesa",
        image: "portuguesa.png"
      },
      {
        type_id: 1,
        name: "Calabreasa",
        image: "calabreasa.png"
      },
      {
        type_id: 1,
        name: "Frango Frito",
        image: "frango.png"
      },
      {
        type_id: 1,
        name: "Marguerita",
        image: "marguerita.png"
      },
      {
        type_id: 1,
        name: "Legumes",
        image: "legumes.png"
      },
      {
        type_id: 1,
        name: "Quatro Queijos",
        image: "quatroqueijos.png"
      },
      {
        type_id: 2,
        name: "Lasanha",
        image: "lasanha.png"
      },
      {
        type_id: 2,
        name: "Macarronada",
        image: "macarronada.png"
      },
      {
        type_id: 3,
        name: "Calabreasa",
        image: "calabreasa.png"
      },
      {
        type_id: 3,
        name: "Frango Frito",
        image: "frango.png"
      },
      {
        type_id: 4,
        name: "Coca cola",
        image: "coca.png"
      },
      {
        type_id: 4,
        name: "Dell Valle",
        image: "dellvalle.png"
      },
      {
        type_id: 5,
        name: "Skol",
        image: "skol.png"
      },
      {
        type_id: 5,
        name: "Brahma",
        image: "brahma.png"
      },
    ])
  }
}

module.exports = TasteSeeder

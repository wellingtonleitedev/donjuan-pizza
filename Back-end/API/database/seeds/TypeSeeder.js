'use strict'

/*
|--------------------------------------------------------------------------
| TypeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')

class TypeSeeder {
  async run () {
    await Database.table('types').insert([
      {
        name: 'Pizzas',
        description:
          'Mais de 50 sabores de pizza em até 4 tamanhos diferentes de fome.',
        time: '30 mins',
        image: 'pizzas.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Massas',
        description:
          '10 tipos de massas com diferentes molhos para te satisfazer.',
        time: '25 mins',
        image: 'massas.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Calzones',
        description:
          'Calzones super recheados com mais de 50 sabores diferentes.',
        time: '15 mins',
        image: 'calzones.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Bebidas não-alcóolicas',
        description: 'Refrigerantes, sucos, chá gelado, energéticos e água.',
        time: '5 mins',
        image: 'bebidas.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Bebidas alcóolicas',
        description: 'Cervejas artesanais, vinhos e destilados.',
        time: '5 mins',
        image: 'alcoolicas.png',
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  }
}

module.exports = TypeSeeder

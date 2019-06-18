'use strict'
const path = require('path')
class FileController {
  async show ({ request, response }) {
    const { file } = request.params

    const filePath = path.resolve(
      __dirname,
      '..',
      '..',
      '..',
      'tmp',
      'images',
      file
    )

    return filePath
  }
}

module.exports = FileController

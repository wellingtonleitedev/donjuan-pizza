'use strict'

const Helpers = use('Helpers')

class FileController {
  async show({ params, response, auth }) {
    const { file } = params
    return response.download(Helpers.tmpPath(`images/${file}`))
  }
}

module.exports = FileController

'use strict'

const User = use('App/Models/User')

class SessionWebController {
  async store ({ request, response, auth }) {
    const { email, password } = request.all()

    const token = await auth.attempt(email, password)

    const user = await User.findByOrFail('email', email)

    if (!user.provider) {
      return response.status(417).json({ error: true })
    }

    user.token = token.token

    await user.save()

    return user
  }
}

module.exports = SessionWebController

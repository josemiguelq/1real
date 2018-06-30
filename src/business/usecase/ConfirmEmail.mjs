import userRepository from 'src/repository/UserRepository'

export default class ConfirmEmail {
    async execute(userData, responder) {
        try {
            await this.checkUserExist(userData)
            await userRepository.save(userData)
            responder.success()
        } catch (err) {
            responder.error(err)
        }
    }

    async checkUserExist(userData) {
        const matchedUser = await userRepository.findByEmail(userData.email)
        if (matchedUser) {
            throw new Error('This email was registered before')
        }
    }
}

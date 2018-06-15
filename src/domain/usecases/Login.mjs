import Encryption from '../entities/Encryption.mjs'
import Token from '../entities/Token.mjs'

export default class Login {
    constructor(userController, userRepository) {
        this.userController = userController
        this.userRepository = userRepository
    }

    async execute() {
        try {
            const userData = this.userController.getData()
            const matchedUser = await this.userRepository.findByEmail(userData.email)
            const passwordIsCorrect = await Encryption.compare(userData.password, matchedUser.password)
            if (!passwordIsCorrect) {
                throw new Error('Wrong password')
            }
            const token = Token.create(userData)
            this.userController.sendSuccess({token})
        } catch (err) {
            this.userController.sendUnauthorized()
        }
    }
}

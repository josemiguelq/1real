import Encryption from '../entities/Encryption.mjs'

export default class UpdatePassword {
    constructor(userController, userRepository) {
        this.userController = userController
        this.userRepository = userRepository
    }

    async execute() {
        try {
            const userData = this.userController.getData()
            const matchedUser = await this.userRepository.findByEmail(userData.email)
            if (!matchedUser) {
                throw new Error('Email not exist')
            }
            matchedUser.password = await Encryption.hash(userData.password)
            const updatedUser = await this.userRepository.save(matchedUser)
            this.userController.sendSuccess(updatedUser)
        } catch (err) {
            this.userController.sendError(err)
        }
    }
}

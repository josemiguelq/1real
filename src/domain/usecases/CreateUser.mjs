import Encryption from '../entities/Encryption.mjs'

export default class CreateUser {
    constructor(userController, userRepository) {
        this.userController = userController
        this.userRepository = userRepository
    }

    async execute() {
        try {
            const userData = this.userController.getData()
            userData.password = await Encryption.hash(userData.password)
            const createdUser = await this.userRepository.save(userData)
            this.userController.sendSuccessResponse(createdUser)
        } catch (err) {
            this.userController.sendErrorResponse(err)
        }
    }
}

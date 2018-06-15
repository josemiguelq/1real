export default class ConfirmEmail {
    constructor(userController, userRepository) {
        this.userController = userController
        this.userRepository = userRepository
    }

    async execute() {
        try {
            const userData = this.userController.getData()
            await this.checkUserExist(userData)
            await this.userRepository.save(userData)
            this.userController.sendRootUrl()
        } catch (err) {
            this.userController.sendErrorResponse(err)
        }
    }

    async checkUserExist(userData) {
        const matchedUser = await this.userRepository.findByEmail(userData.email)
        if (matchedUser) {
            throw new Error('This email was registered before')
        }
    }
}

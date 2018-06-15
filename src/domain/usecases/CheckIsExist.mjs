export default class CheckIsExist {
    constructor(userController, userRepository) {
        this.userController = userController
        this.userRepository = userRepository
    }

    async execute() {
        try {
            const userData = this.userController.getData()
            const matchedUser = await this.userRepository.findByEmail(userData.email)
            if (matchedUser) {
                this.userController.sendSuccess({exist: true})
            } else {
                this.userController.sendSuccess({exist: false})
            }
        } catch (err) {
            this.userController.sendError(err)
        }
    }
}

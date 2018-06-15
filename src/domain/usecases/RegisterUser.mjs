import Encryption from '../entities/Encryption.mjs'
import EmailTemplate from '../entities/EmailTemplate';

export default class RegisterUser {
    constructor(userController, userRepository, emailRepository) {
        this.userController = userController
        this.userRepository = userRepository
        this.emailRepository = emailRepository
    }

    async execute() {
        try {
            const userData = this.userController.getData()
            await this.checkUserExist(userData)
            userData.password = await Encryption.hash(userData.password)
            const email = EmailTemplate.createEmailForRegisterUser(userData)
            await this.emailRepository.send(email)
            this.userController.sendSuccess({success: true})
        } catch (err) {
            this.userController.sendError(err)
        }
    }

    async checkUserExist(userData) {
        const matchedUser = await this.userRepository.findByEmail(userData.email)
        if (matchedUser) {
            throw new Error('This email was registered before')
        }
    }
}

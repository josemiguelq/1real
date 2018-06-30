import Encryption from '../entity/Encryption.mjs'
import EmailTemplate from '../entity/EmailTemplate'
import userRepository from '../../repository/UserRepository'
import emailRepository from '../../repository/EmailRepository'

export default class RegisterUser {
    async execute(userData, responder) {
        try {
            await this.checkUserExist(userData)
            userData.password = await Encryption.hash(userData.password)
            const email = EmailTemplate.createEmailForRegisterUser(userData)
            await emailRepository.send(email)
            responder.success({success: true})
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

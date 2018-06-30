import Encryption from 'src/business/entity/Encryption.mjs'
import EmailTemplate from 'src/business/entity/EmailTemplate'
import userRepository from 'src/repository/UserRepository'
import emailRepository from 'src/repository/EmailRepository'

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

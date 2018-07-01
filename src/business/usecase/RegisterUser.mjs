import Token from 'src/business/entity/Token.mjs'
import EmailTemplate from 'src/business/entity/EmailTemplate'
import userRepository from 'src/repository/UserRepository'
import emailRepository from 'src/repository/EmailRepository'

export default class RegisterUser {
    async execute(userData, responder) {
        try {
            await this.checkUserExist(userData)
            const token = Token.create(userData)
            const email = EmailTemplate.createEmailForRegisterUser(userData, token)
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

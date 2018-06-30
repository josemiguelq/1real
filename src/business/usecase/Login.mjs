import Encryption from '../entity/Encryption.mjs'
import Token from '../entity/Token.mjs'
import userRepository from '../../repository/UserRepository'

export default class Login {
    async execute(userData, responder) {
        try {
            const matchedUser = await userRepository.findByEmail(userData.email)
            const passwordIsCorrect = await Encryption.compare(userData.password, matchedUser.password)
            if (!passwordIsCorrect) {
                throw new Error('Wrong password')
            }
            const token = Token.create(userData)
            responder.success({token})
        } catch (err) {
            responder.unauthorized()
        }
    }
}

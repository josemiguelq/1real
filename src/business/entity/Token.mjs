import jwt from 'jsonwebtoken'
import environment from '../../common/environment.mjs'

const secret = 'CODATE_SECRET'
const algorithm = 'HS256'

export default class Token {
    static create(userData) {
        const payload = {
            id: userData._id,
            email: userData.email,
            timestamp: new Date()
        }
        return jwt.sign(payload, secret, {
            algorithm: algorithm,
            expiresIn: environment.jwt.expiresInSeconds
        })
    }
}

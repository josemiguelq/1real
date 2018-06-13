import jwt from 'jsonwebtoken'

const secret = 'faciles-sucesso-2018'
const algorithm = 'HS256'
const expiresInSeconds = 5 * 60 * 60

export default class Token {
    static create(userData) {
        const payload = {
            id: userData._id,
            email: userData.email,
            timestamp: new Date()
        }
        return jwt.sign(payload, secret, {
            algorithm: algorithm,
            expiresIn: expiresInSeconds
        })
    }
}

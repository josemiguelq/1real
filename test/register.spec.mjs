import request from 'supertest'
import app from '../src/index.mjs'
import Server from '../src/common/Server.mjs'
import environment from '../src/common/environment.mjs'
import logger from '../src/common/logger.mjs'

describe('Register', () => {
    before((done) => {
        const server = new Server(app, environment)
        server.start()
            .then(() => {
                logger.info('Server started')
                done()
            })
            .catch(err => logger.error('Error on starting server %s', err))
    })

    it('deve registrar novo usuario quando todos os atributos forem informados', (done) => {
        const userData = {email: 'test5@test.com.br', password: 'senha123'}
        request(app)
            .post('/api/auth/register')
            .send(userData)
            .end((err, res) => {
                expect(res.statusCode).to.equal(200)
                expect(res.body).to.have.property('_id')
                expect(res.body.email).to.equal(userData.email)
                done()
            })
    })

    it('deve devolver status 500 quando o email não for informado', (done) => {
        const userData = {password: 'senha123'}
        request(app)
            .post('/api/auth/register')
            .send(userData)
            .end((err, res) => {
                expect(res.statusCode).to.equal(500)
                done()
            })
    })

})

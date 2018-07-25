import request from 'supertest'
import app from '../src/app.mjs'
import Server from '../src/common/Server.mjs'
import environment from '../src/common/environment.mjs'
import logger from '../src/common/logger.mjs'

describe('Save HelloWorld', () => {
    before((done) => {
        const server = new Server(app, environment)
        server.start()
            .then(() => {
                logger.info('Server started')
                done()
            })
            .catch(err => logger.error('Error on starting server %s', err))
    })

    it('should save when data is valid', (done) => {
        const payload = {hello_world: 'Olá Mundo'}
        request(app)
            .post('')
            .send(payload)
            .end((err, res) => {
                expect(res.statusCode).to.equal(200)
                expect(res.body).to.have.property('_id')
                done()
            })
    })

    it('should send status 500 when payload is invalid', (done) => {
        const payload = 'undefined'
        request(app)
            .post('/')
            .send(payload)
            .end((err, res) => {
                expect(res.statusCode).to.equal(500)
                done()
            })
    })

})

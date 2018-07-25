import request from 'supertest'
import app from '../src/app.mjs'
import Server from '../src/common/Server.mjs'
import environment from '../src/common/environment.mjs'
import logger from '../src/common/logger.mjs'
import {expect} from 'chai'

import HelloWorldRepository from '../src/business/entity/hello_world/HelloWorldRepository.mjs';

describe('Save HelloWorld', () => {
    before((done) => {
        
        const server = new Server(app, environment)
        server.start()
            .then(() => {
                logger.info('Server started')
                HelloWorldRepository.delete({})
                done()
            })
            .catch(err => logger.error('Error on starting server %s', err))
    })

    it('should return status 200 when data is valid', (done) => {
        const payload = {hello_world: 'Olá Mundso'}
        request(app)
            .post('/helloworld')
            .send(payload)
            .end((err, res) => {
                expect(res.statusCode).to.equal(200)
                done()
            })
    })

    it('should send status 500 when payload is invalid', (done) => {
        const payload = {}
        request(app)
            .post('/helloworld')
            .send(payload)
            .end((err, res) => {
                expect(res.statusCode).to.equal(500)
                done()
            })
    })

    after((done) => {
        HelloWorldRepository.delete({})
        done()
    })

})

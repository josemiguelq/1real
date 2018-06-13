import request from 'supertest'
import mongoose from 'mongoose'
import serverPromise from '../main.mjs'
import {utils} from 'faciles-commons'

describe('UserRouter', () => {
    let server = null

    before((done) => {
        serverPromise.then((httpServer) => {
            server = httpServer
            done()
        })
    })

    after(() => {
        server.close()
    })

    beforeEach(() => {
        utils.db.clear()
    })

    it('deve registrar novo usuario quando todos os atributos forem informados', (done) => {
        const userData = {email: 'test5@test.com.br', password: 'senha123'}
        request(server)
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
        request(server)
            .post('/api/auth/register')
            .send(userData)
            .end((err, res) => {
                expect(res.statusCode).to.equal(500)
                done()
            })
    })

    xit('deve alterar senha quando email e novopassword for passado corretamente', (done) => {
        utils.db.insert('User', [{email: 'update@test.com.br', password: 'senha123'}])
            .then(() => {
                const userData = {email: 'update@test.com.br', password: 'senhaAlterada'}

                request(server)
                    .put('/api/auth/password')
                    .send(userData)
                    .end((err, res) => {
                        expect(res.statusCode).to.equal(200)
                        done()
                    })
            })
    })
})

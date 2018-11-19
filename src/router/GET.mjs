import express from 'express'
import Responder from '../common/Responder.mjs'
import FindHelloWorld from '../business/usecase/FindHelloWorld.mjs'
import Pagar from '../business/usecase/Pagar.mjs'

const router = express.Router()
router.get('/helloworlds', (req, res, next) => {
    const responder = new Responder(req, res, next)
    const findHelloWorld = new FindHelloWorld()
    findHelloWorld.execute(req.params, responder)
})

router.get('/', (req, res, next) => {
    const responder = new Responder(req, res, next)
    const pagar = new Pagar();
    pagar.execute(responder)
})

export default router

import express from 'express'
import Responder from 'src/common/Responder.mjs'
import SaveHelloWorld from 'src/business/usecase/SaveHelloWorld.mjs'

const router = express.Router()
router.get('/', (req, res, next) => {
    const responder = new Responder(req, res, next)
    const saveHelloWorld = new SaveHelloWorld()
    saveHelloWorld.execute(req.params, responder)
})

export default router

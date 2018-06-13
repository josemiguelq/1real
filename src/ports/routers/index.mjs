import userRepository from '../../adapters/repository/UserRepository.mjs'
import UserController from '../controllers/UserController.mjs'
import CreateUser from '../../domain/usecases/CreateUser.mjs'
import UpdatePassword from '../../domain/usecases/UpdatePassword.mjs'
import Login from '../../domain/usecases/Login.mjs'
import express from 'express'

function createUser(req, res, next) {
    const userController = new UserController(req, res, next)
    const createUser = new CreateUser(userController, userRepository)
    createUser.execute()
}

function login(req, res, next) {
    const userController = new UserController(req, res, next)
    const login = new Login(userController, userRepository)
    login.execute()
}

function updatePassword(req, res, next) {
    const userController = new UserController(req, res, next)
    const updatePassword = new UpdatePassword(userController, userRepository)
    updatePassword.execute()
}

const router = express.Router()
router.post('/auth/register', (req, res, next) => createUser(req, res, next))
router.post('/auth/login', (req, res, next) => login(req, res, next))
router.put('/auth/password', (req, res, next) => updatePassword(req, res, next))

export default router

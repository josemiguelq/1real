import express from 'express'
import userRepository from '../../adapters/repository/UserRepository.mjs'
import emailRepository from '../../adapters/repository/EmailRepository.mjs'
import UserController from '../controllers/UserController.mjs'
import RegisterUser from '../../domain/usecases/RegisterUser.mjs'
import CheckIsExist from '../../domain/usecases/CheckIsExist.mjs'
import UpdatePassword from '../../domain/usecases/UpdatePassword.mjs'
import ConfirmEmail from '../../domain/usecases/ConfirmEmail.mjs'
import Login from '../../domain/usecases/Login.mjs'

function getRouter() {
    function checkIsExist(req, res, next) {
        const userController = new UserController(req, res, next)
        const checkIsExist = new CheckIsExist(userController, userRepository)
        checkIsExist.execute()
    }

    function register(req, res, next) {
        const userController = new UserController(req, res, next)
        const registerUser = new RegisterUser(userController, userRepository, emailRepository)
        registerUser.execute()
    }

    function login(req, res, next) {
        const userController = new UserController(req, res, next)
        const login = new Login(userController, userRepository)
        login.execute()
    }

    function update(req, res, next) {
        const userController = new UserController(req, res, next)
        const updatePassword = new UpdatePassword(userController, userRepository)
        updatePassword.execute()
    }

    function confirm(req, res, next) {
        const userController = new UserController(req, res, next)
        const confirmEmail = new ConfirmEmail(userController, userRepository)
        confirmEmail.execute()
    }

    const router = express.Router()
    router.get('/auth/exists/:email', (req, res, next) => checkIsExist(req, res, next))
    router.post('/auth/register', (req, res, next) => register(req, res, next))
    router.post('/auth/login', (req, res, next) => login(req, res, next))
    router.put('/auth/password', (req, res, next) => update(req, res, next))
    router.get('/auth/confirm/:email/:password', (req, res, next) => confirm(req, res, next))
}

export default getRouter

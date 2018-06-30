import express from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import exists from './router/exists.mjs'
import register from './router/register.mjs'
import confirm from './router/confirm.mjs'
import login from './router/login.mjs'
import updatePassword from './router/updatePassword.mjs'
import errorHandler from './common/errorHandler.mjs'

const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(helmet())
app.use(exists)
app.use(register)
app.use(confirm)
app.use(login)
app.use(updatePassword)
app.use(errorHandler)

export default app

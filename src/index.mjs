import express from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import exists from './routers/exists.mjs'
import register from './routers/register.mjs'
import confirm from './routers/confirm.mjs'
import login from './routers/login.mjs'
import updatePassword from './routers/updatePassword.mjs'
import errorHandler from './commons/errorHandler.mjs'

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

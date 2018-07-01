import express from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import exists from 'src/router/exists.mjs'
import register from 'src/router/register.mjs'
import confirm from 'src/router/confirm.mjs'
import login from 'src/router/login.mjs'
import updatePassword from 'src/router/updatePassword.mjs'
import verifyToken from 'src/router/verifyToken.mjs'
import errorHandler from 'src/common/errorHandler.mjs'

const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(helmet())
app.use(exists)
app.use(register)
app.use(confirm)
app.use(login)
app.use(updatePassword)
app.use(verifyToken)
app.use(errorHandler)

export default app

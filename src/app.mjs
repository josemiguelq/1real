import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import errorHandler from './common/errorHandler.mjs'
import helloworld from './router/HelloWorld.mjs'

const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(helmet())
app.use(cors())
app.use(helloworld)
app.use(errorHandler)

export default app

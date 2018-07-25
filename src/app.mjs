import express from '../../../../Library/Caches/typescript/2.9/node_modules/@types/express'
import bodyParser from '../../../../Library/Caches/typescript/2.9/node_modules/@types/body-parser'
import cors from '../../../../Library/Caches/typescript/2.9/node_modules/@types/cors'
import helmet from '../../../../Library/Caches/typescript/2.9/node_modules/@types/helmet'
import errorHandler from 'src/common/errorHandler.mjs'

const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(helmet())
app.use(cors())
app.use(errorHandler)

export default app

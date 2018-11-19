import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import GET from './router/GET.mjs'
import POST from './router/POST.mjs'
import RouteLogger from './common/RouteLogger.mjs'
import path from 'path'

const app = express()

/** Settings to map views pages*/
app.set('views', path.join(path.resolve('./src'), 'views'));
app.set('view engine', 'twig');

/** Settings to map public folder */
app.use(express.static(path.join(path.resolve('./src'), 'public')));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(helmet())
app.use(cors())
app.use(RouteLogger)

/** Insert your routes here */
app.use(GET)
app.use(POST)

export default app

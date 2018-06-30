import app from './src/index.mjs'
import Server from './src/commons/Server.mjs'
import environment from './src/commons/environment.mjs'
import logger from './src/commons/logger.mjs'

const server = new Server(app, environment)
server.start()
    .then(startedServer => logger.info('Server started %s', startedServer))
    .catch(err => logger.error('Error on starting server %s', err))

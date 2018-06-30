import logger from './logger.mjs'

export default (err, req, res) => {
    let status = 500
    const payload = {message: err.message}
    switch (err.name) {
    case 'MongoError':
        if (err.code === 11000) {
            status = 400
        }
        break
    case 'ValidationError':
        status = 400
        break
    }
    logger.error('Error', err)
    return res.json(payload, status)
}

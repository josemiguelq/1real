import logger from './logger.mjs'

export default (req, res, next, err) => {
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
    logger.error(err)
    return res.status(status).json(payload)
}

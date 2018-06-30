export default (err, req, res) => {
    const status = 500
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

    return res.status(status).json(payload)
}

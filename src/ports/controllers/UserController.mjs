export default class UserController {
    constructor(req, res, next) {
        this.req = req
        this.res = res
        this.next = next
    }

    getData() {
        if (this.hasRequestBody()) {
            return this.req.body
        }
        return this.req.params
    }

    hasRequestBody() {
        return this.req.method === 'POST' || this.req.method === 'PUT'
    }

    sendSuccess(createdUser) {
        this.res.json(createdUser)
    }

    sendHome() {
        this.res.redirect('/')
    }

    sendError(err) {
        this.next(err)
    }

    sendUnauthorized() {
        this.res.sendStatus(401)
    }
}

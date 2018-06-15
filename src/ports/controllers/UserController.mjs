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

    sendSuccessResponse(createdUser) {
        this.res.json(createdUser)
    }

    sendRootUrl() {
        this.res.redirect('/')
    }

    sendErrorResponse(err) {
        this.next(err)
    }

    sendUnauthorizedResponse() {
        this.res.sendStatus(401)
    }
}

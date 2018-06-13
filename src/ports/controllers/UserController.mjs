export default class UserController {
    constructor(req, res, next) {
        this.req = req
        this.res = res
        this.next = next
    }

    getData() {
        return this.req.body
    }

    sendSuccessResponse(createdUser) {
        this.res.json(createdUser)
    }

    sendErrorResponse(err) {
        this.next(err)
    }

    sendUnauthorizedResponse() {
        this.res.sendStatus(401)
    }
}

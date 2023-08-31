const customAPIError = require('./main-custom-errors')
const {StatusCodes} = require('http-status-codes')

class NotFoundError extends customAPIError{
    constructor(message){
        super(message)
        this.StatusCodes = StatusCodes.NOT_FOUND
}
}

module.exports = NotFoundError
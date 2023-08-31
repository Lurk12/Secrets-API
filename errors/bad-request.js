const customAPIError = require('./main-custom-errors')
const {StatusCodes} = require('http-status-codes')

class BadRequestError extends customAPIError{
    constructor(message){
        super(message)
        this.StatusCodes = StatusCodes.BAD_REQUEST
    }
}

module.exports = BadRequestError
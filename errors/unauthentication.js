const customAPIError = require('./main-custom-errors')
const {StatusCodes} = require('http-status-codes')

class UnAuthenticationError extends customAPIError{
    constructor(message){
        super(message)
        this.StatusCodes = StatusCodes.UNAUTHORIZED
    }
}

module.exports = UnAuthenticationError
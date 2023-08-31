const customAPIError = require('./main-custom-errors')
const BadRequestError = require('./bad-request') 
const NotFoundError = require('./not-found')
const UnAuthenticationError = require('./unauthentication')


module.exports = {
    customAPIError,
    BadRequestError,
    NotFoundError,
    UnAuthenticationError,
}
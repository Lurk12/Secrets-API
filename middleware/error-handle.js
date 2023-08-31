const customAPIError = require('../errors/')
const {StatusCodes} = require('http-status-codes')

const errorHandlerMiddleware = (err,req,res,next)=>{
    if(err instanceof customAPIError){
        return res.status(err.StatusCodes).json({msg: err.message})
}
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send('Something went wrong!')
}


module.exports = errorHandlerMiddleware 
const jwt = require('jsonwebtoken')
const {StatusCodes} = require('http-status-codes')

const authenticateUser = (req, res, next)=>{
    const token = req.headers.authorization?.split(' ')[1]
    console.log(token);

    if(!token){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: 'Unauthorized'})
    }
    try {
       const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
       req.user = decodedToken
       console.log(req.user);
       next()
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: 'Unauthorized'})
    }
}

module.exports = authenticateUser

const notFoundMiddleware = (req, res)=> res.status(400).json({msg: 'Route not found!'})


module.exports = notFoundMiddleware
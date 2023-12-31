require('dotenv').config();
require('express-async-errors')

const express = require('express');
const app = express();

const connectDB = require('./db/connect');

const authRouter = require('./routes/auth')

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handle');
const authenticateUser = require('./middleware/authentication')


app.use(express.json())
app.use(express.static('public'))

app.use('/api/v1/auth',authRouter)

// app.get('/dashboard', authenticateUser, (req, res) => {
//     const secretMessage = "Jack Bauer is my hero"; 
        
//     res.status(StatusCodes.OK).json({
//         msg: `Hello ${req.user.username}, You've Discovered My Secret!\n${secretMessage}`
//     });
// });


app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000
const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`app is listening on port ${port}. . .`))
        
    } catch (error) {
        console.log(error);
    }
 
}
start()
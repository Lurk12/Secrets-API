const User = require('../models/User')
const {StatusCodes} =  require('http-status-codes')
const BadRequestError = require('../errors/bad-request')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')



const register = async(req,res)=>{
    try {
       const user = await User.create({...req.body})
       console.log('User created:', user);

       const token = await user.createJWT()
       console.log('JWT generated:', token);

       res.status(StatusCodes.CREATED).json({user: {name:user.name, token}})
    } catch (error) {
        console.log(error);
    }
}


const login = async(req,res)=>{
     const {name, password} = req.body
     console.log(password);


     try {

        const user = await User.findOne({name});
        console.log('user:', user) 

       if(!user){
      return res.status(StatusCodes.UNAUTHORIZED).json({msg: 'Invalid Credentials!'})
     }

       const passwordMatch = await bcrypt.compare(password, user.password)
      console.log('password:', password);

       if (!passwordMatch ){
        return res.status(StatusCodes.BAD_REQUEST).json({msg:'Incorrect Password!'});
       }

       const token = user.createJWT();

         res.status(StatusCodes.OK).json({user:{name:user.name, token}})
    } catch (error) {
       console.log(error) 
       res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'An error occurred' });
    }
  
  
}

const dashboard = async (req, res) => {
    try {
        console.log("req.user:", req.user);
        const secretMessage = "Jack Bauer is my hero"; // Replace with your actual secret message
        
        res.status(StatusCodes.OK).json({
            msg: `Hello ${req.user.name}, You've Discovered My Secret!\n${secretMessage}`
        });
    } catch (error) {
       console.log(error);
    }
};

module.exports = {register, login, dashboard}
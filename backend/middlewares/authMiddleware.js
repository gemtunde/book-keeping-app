

const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = asyncHandler(async (req, res, next)=> {
       let token ;
       //console.log(req.headers)
       if(
           req.headers.authorization 
           && req.headers.authorization.startsWith('Bearer')){
           try{
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

            const user = await User.findById(decoded.id)
        
            req.user = user;
            next();
        }
           catch(err){
               res.status(400).send('not authorized... invalid token')

           }
       } 
})


module.exports= authMiddleware;



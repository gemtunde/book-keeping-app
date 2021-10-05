
const express = require('express');
const asyncHandler = require('express-async-handler');
const authMiddleware = require('../middlewares/authMiddleware');
const usersRoute = express.Router();
const User = require('../models/User');
const generateToken = require('../utils/generatetokens');


    //register
    usersRoute.post('/register', 
    asyncHandler(async(req, res) => {
            //res.send("register");
            
                const {name, email, password} = req.body
                const userExists = await User.findOne({email});
                if(userExists){
                    res.status(400).send({message : 'error user exists'})
                }
                const user = await User.create({name, email,password  });
                console.log(user);
                res.status(200).json({
                    _id : user._id,
                    name : user.name,
                    email : user.email,
                    token : generateToken(user._id)
                })
    
        }
    ));

    //login
    usersRoute.post('/login', asyncHandler(
        async(req, res) => {                
          
                const {email, password} = req.body
                const user = await User.findOne({email})
                if(user && (await user.isPasswordMatch(password))){
                    res.status(200).json({
                        _id : user._id,
                    name : user.name,
                    email : user.email,
                    token : generateToken(user._id)
                    })
                }
                res.status(401).send({message : "Invalid credentials"})                     
            
        }
    ))
    //update
    usersRoute.put('/update', async(req, res) => {
        try{
            res.send('update')
        }
        catch(err){
            console.log(err)
        }
    })
    //delete
    usersRoute.delete('/delete/:id', (req, res) => {
        try{
            res.send('delete')
        }
        catch(err){
            console.log(err)
        }
    })
    //get users
    usersRoute.get('/', authMiddleware, (req, res) => {
        try{
            res.send(req.user);
            //console.log(req.headers)
        }
        catch(err){
            console.log(err)
        }
    })


    module.exports = usersRoute ;

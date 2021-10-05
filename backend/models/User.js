const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');

//schema

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique: true
    },
    password : {
        type : String,
        required : true,
    }
})

//encrypt password from registr route
UserSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt(10);
    //console.log(this.password);
    this.password = await bcrypt.hash(this.password, salt)
    next();

});

//verify password from login route.... make isPasswordMatch available to login route

    UserSchema.methods.isPasswordMatch = async function(enteredPassword){
        return await bcrypt.compare(enteredPassword, this.password)
    }

const User = mongoose.model('User', UserSchema)

module.exports = User


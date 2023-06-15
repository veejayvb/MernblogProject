const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : [true, 'Username is required for user'],
        unique : true
    },
    emailid: {
        type : String,
        required : true,
        lowercase : true,
        validate : [validator.isEmail, 'Please provide valid email']
    },
    password : {
        type : String,
        required : [true, 'A User must have password'],
        minlength : 8
    },
    photo : String,
    passwordConfirm : {
        type: String,
        required : true,
        validate : {
            validator : function(el) {
                return el === this.password;
            },
        message: "passwords are not same"
        },
        select : false
    },
    profilePic: {
        type : String,
        default : ''
    }
}, {timestamps : true})

userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12)

     this.passwordConfirm = undefined;
    next();
})
const User = mongoose.model('user', userSchema)

module.exports = User
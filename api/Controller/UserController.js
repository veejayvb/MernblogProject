const Post= require('../models/PostModel');
const User = require('../models/UserModel');

exports.updateMe =  async(req, res) => {
        // console.log(user._id)
        // if(user._id === req.params.id)
        if(req.body.userId === req.params.id)
        {
            try{    
                const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set : req.body} , { new: true })
                res.status(200).json({
                    status : 'success',
                    data : {
                        updatedUser
                    }
                })
                }catch(err){
                res.status(500).json({
                    status : 'fail',
                    message : err.message
                })
                }
        }else{
            res.status(401).json({
                message : 'You can update only your account'
            })
        }
    }



exports.deleteMe = async(req,res) => {
    if(req.body.userId === req.params.id){
        try{
            const user = await User.findById(req.params.id)
            if(!user) res.status(404).json({message: 'user Not Found'})
            await Post.deleteMany({username : user.username})
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("user has been deleted")
        }catch(err){
            res.status(400).json()
        }
    }else{
        res.status(400).json({
            status : 'fail',
            message : 'You can delete only Your Account'
        })
    }    
}

exports.getMe = async(req,res)=> {
    if(req.bod.userId === req.params.id)
    {
        try{
            const user = await User.findById(req.params.id)
            !user && res.status(404).json('user not found')
            const {password, ...userDetails} = user
            res.status(200).json(userDetails)
        }catch(err){
            
        }
    }else{
        res.status(500).json(err)
    }
}

exports.getAllUser = async(req,res) => {
    try{
        const allUsers = await User.find();
        res.status(200).json({ status : 'success', data : {allUsers} })
    }catch(err){
        res.status(400).json(`${err.message}`)
    }
}
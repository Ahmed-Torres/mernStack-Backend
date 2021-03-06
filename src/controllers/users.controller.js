const userCtrl = {};

const User = require("../models/User")

userCtrl.getUsers = async (req,res)=> {
    const users = await User.find();
    res.send(users)
};

userCtrl.createUser = async (req,res)=> {
    const {username} = req.body;
    const newUser =  new User({username});
    await newUser.save()
    res.json("User Created")
};

userCtrl.deleteUser = async (req,res)=> {
    await User.findOneAndDelete(req.params.id)
    res.json("user Delete")
};

module.exports = userCtrl;
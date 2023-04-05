const User = require('../models/User')

const generateJWT = require('../config/generateJWT')

const registerUser = async (req, res) => {
    const {
        name,
        email,
        password
    } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error('Please ensure all required fields are filled out')
    }

    const emailInUse = await User.findOne({
        email
    })

    const usernameInUse = await User.findOne({
        name
    })

    if (emailInUse) {
        res.status(400);
        res.json({
            "Error": "Email is being used by another user"
        })
        return
    }

    if (usernameInUse) {
        res.status(400);
        res.json({
            "Error": "Username is being used by another user"
        })
        return
    }

    const newUser = await User.create({
        name,
        email,
        password
    })

    if (newUser) {
        res.status(201).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            token: generateJWT(newUser._id)
        })
    } else {
        res.status(400);
        throw new Error('User Creation failed!')
    }
}

const authUser = async (req, res) => {
    const {
        email,
        password
    } = req.body;

    const user = await User.findOne({
        email
    });

    if (user && (await user.matchPassword(password))) {
        console.log('passwords match');
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            favorites: user.favorites,
            token: generateJWT(user._id)
        })
    } else {
        return res.status(301).json({
            'error': 'Incorrect username or password entered!'
        })
    }
}

const getAllUsers = async (req, res) => {

    try {
        const allUsers = await User.find({}, "-password -favorites -__v")
            .select('-password -__v')
            .populate('_id name email')
        res.status(200).json({
            allUsers
        })
    } catch (e) {
        console.log(e)
    }
    console.log('get all users finished:');
}

const getSingleUser = async (req, res) => {
    console.log('getSingleUser called')
    try {
        const response = await User.find({
            _id: req.params.id
        }, "-password -__v")

        res.status(200).json({
            response
        })
    } catch (error) {
        console.log(error)
    }

}

const getFavorites = async (req, res) => {

    try {
        const response = await User.find({
            _id: req.params.id
        }, "-password -__v -_id -name -email -createdAt -updatedAt")

        res.status(200).json({
            response
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    registerUser,
    authUser,
    getAllUsers,
    getSingleUser,
    getFavorites
}
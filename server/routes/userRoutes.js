const express = require('express')
const router = express.Router()
const { registerUser, authUser, getAllUsers, getSingleUser, getFavorites } = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')



//register user and send to all recipes page
router.post('/register', registerUser)
router.post('/login', authUser)//.route('/getallrecipes')
router.get('/allusers', getAllUsers)
router.get('/allusers/:id', getSingleUser)
router.get('/allusers/:id/favorites', getFavorites)


module.exports = router;
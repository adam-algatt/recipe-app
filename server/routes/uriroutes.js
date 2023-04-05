const express = require('express')
const router = express.Router()

const  createUri  = require('../controllers/uris')

router.route('/uris').post(createUri)

module.exports = router;
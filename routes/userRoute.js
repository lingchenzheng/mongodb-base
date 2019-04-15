const router = require('express').Router()
const userController = require('../controller/userController')
router.post('/addUser', userController.addUser)

module.exports = router

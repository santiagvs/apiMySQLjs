const router = require('express').Router() 

// import controllers
const UserController = require('./controllers/userController')

router.post('/create', UserController.create)
router.post('/login', UserController.login)

module.exports = router
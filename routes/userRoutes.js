const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const auth = require("../middlewares/auth")

router.get('/',userController.getUsers)
router.get('/:id',userController.getUser)
router.post('/',userController.createUser)
router.put('/:id', auth, userController.updateUser)
router.delete('/:id',auth, userController.deleteUser)
router.post('/login',userController.loginUser)
// router.get('/home',auth, userController.homePage)
router.put('/forgot/:id', auth, userController.forgotPassword)

module.exports = router
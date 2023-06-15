const express = require('express');
const router = express.Router();

const authController = require('../Controller/authController')


router.post('/register', authController.singUp)

router.post('/login', authController.Login)



module.exports = router
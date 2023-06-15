const express = require('express');
const router = express.Router();
const UserController = require('../Controller/UserController')


router.patch('/user/:id', UserController.updateMe);
router.delete('/user/:id', UserController.deleteMe)
router.get('/user/:id', UserController.getMe)
router.get('/users', UserController.getAllUser)


module.exports = router
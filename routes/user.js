const express = require('express');
const userController=require('../controllers/user.controller');

const router = express.Router();

// Signup
router.post('/signup', userController.signup);

// Login
router.post('/login',userController.login);

module.exports = router;
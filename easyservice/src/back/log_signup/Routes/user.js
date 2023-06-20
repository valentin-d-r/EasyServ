const express = require('express');
const router = express.Router();
const userCtrl = require('../Controller/user')

router.post('/signup', userCtrl.signup);
router.get('/login', userCtrl.login);

module.exports = router;
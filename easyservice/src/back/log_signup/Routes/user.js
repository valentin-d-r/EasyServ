const express = require('express');
const router = express.Router();
const userCtrl = require('../Controller/user')

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.patch('/update/:id', userCtrl.modifyUser);

module.exports = router;
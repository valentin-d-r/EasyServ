const express = require('express');
const router = express.Router();
const userCtrl = require('../controller/controller')

router.post('/addComment', userCtrl.signup);
router.post('/login', userCtrl.login);
router.patch('/update/:id', userCtrl.modifyUser);
router.delete('/delete/:id', userCtrl.deleteUser);

module.exports = router;
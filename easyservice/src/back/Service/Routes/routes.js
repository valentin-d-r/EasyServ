const express = require('express');
const router = express.Router();
const serviceCtrl = require('../Controller/controller')

router.post('/addService', serviceCtrl.addService);
router.patch('/updateService', serviceCtrl.modifyService);


module.exports = router;
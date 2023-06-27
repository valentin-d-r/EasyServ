const express = require('express');
const router = express.Router();
const serviceCtrl = require('../Controller/controller')

router.post('/addService', serviceCtrl.addService);
router.patch('/updateService', serviceCtrl.modifyService);
router.get('/showAllService', serviceCtrl.showAllServices);
router.get('/tokentest', serviceCtrl.showToken);
router.delete('/deleteService', serviceCtrl.deleteService)


module.exports = router;
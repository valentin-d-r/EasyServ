const express = require('express');
const router = express.Router();
const serviceCtrl = require('../Controller/controller')

router.post('/addService', serviceCtrl.addService);
router.patch('/updateService/:id', serviceCtrl.modifyService);
router.get('/showAllService', serviceCtrl.showAllServices);
router.delete('/deleteService/:id', serviceCtrl.deleteService)


module.exports = router;
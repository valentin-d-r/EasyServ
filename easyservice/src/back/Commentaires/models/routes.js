const express = require('express');
const router = express.Router();
const userCmt = require('../controller/controller')

router.post('/addComment', userCmt.addComment);
router.get('/showComment', userCmt.showComment);
router.delete('/deleteComment', userCmt.deleteComment);
router.post('/addRate', userCmt.addLike)


module.exports = router;
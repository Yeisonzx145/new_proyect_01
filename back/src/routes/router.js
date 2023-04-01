const {Router} = require('express');
const router = Router();
const getCharDetail = require('../controllers/getCharDetail');
const getChatById = require('../controllers/getCharById')


router.get('/onsearch/:id',getChatById)
router.get('/detail/:id',getCharDetail)

module.exports = router;
const {Router} = require('express');
const getCharDetail = require('../controllers/getCharDetail');
const getCharById = require('../controllers/getCharById')

const router = Router();

router.get('/onsearch/:id',getCharById);
router.get('/detail/:id',getCharDetail);

module.exports = router;
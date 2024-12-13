const express = require('express');
const router = express.Router()
const { read , list ,create , update , remove } = require('../controllers/product');

router.get('/product/:id', read);
router.get('/productAll', list);
router.post('/product' , create);
router.put('/product/:id' , update);
router.delete('/product/:id' , remove);

module.exports = router
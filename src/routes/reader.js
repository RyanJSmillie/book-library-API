const express = require('express');
const readerController = require('../controllers/reader');

const router = express.Router();

router.post('/', readerController.create);
router.get('/', readerController.read);
router.get('/:id', readerController.readById);
router.patch('/:id', readerController.updateById);
router.delete('/:id', readerController.deleteById);

module.exports = router;
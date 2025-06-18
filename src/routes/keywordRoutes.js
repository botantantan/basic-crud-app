const express = require('express');
const router = express.Router();
const keywordController = require('../controllers/keywordController');

router.post('/', keywordController.create);
router.get('/', keywordController.index);
router.get('/:id', keywordController.show);
router.put('/:id', keywordController.update);
router.delete('/:id', keywordController.delete);

module.exports = router;

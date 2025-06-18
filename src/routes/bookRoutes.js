const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.post('/', bookController.create);
router.get('/', bookController.index);
router.get('/:id', bookController.show);
router.put('/:id', bookController.update);
router.delete('/:id', bookController.delete);
router.post('/bulk-delete', bookController.bulkDelete);
router.get('/test', (req, res) => res.json({ msg: 'test works' }));


module.exports = router;

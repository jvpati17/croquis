const express = require('express');
const router = express.Router();
const collectionsCtrl = require('../../controllers/api/collections');
const ensureLoggedIn  = require('../../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, collectionsCtrl.index);
router.post('/', ensureLoggedIn, collectionsCtrl.create);
router.get('/:collection', ensureLoggedIn, collectionsCtrl.getId);
router.delete('/:id', ensureLoggedIn, collectionsCtrl.delete);
//router.put('/:id', ensureLoggedIn, collectionsCtrl.edit)

module.exports = router;
// lineItemRoutes.js
const express = require('express');
const router = express.Router();
const lineItemController = require('../controllers/lineItemController');

router.post('/', lineItemController.createLineItem);
router.get('/', lineItemController.getAllLineItems);
router.get('/:id', lineItemController.getLineItemById);
router.put('/:id', lineItemController.updateLineItem);
router.delete('/:id', lineItemController.deleteLineItem);

module.exports = router;

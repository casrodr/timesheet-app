// timesheetRoutes.js
const express = require('express');
const router = express.Router();
const timesheetController = require('../controllers/timesheetController');

router.post('/', timesheetController.createTimesheet);
router.get('/', timesheetController.getAllTimesheets);
router.get('/:id', timesheetController.getTimesheetById);
router.put('/:id', timesheetController.updateTimesheet);
router.delete('/:id', timesheetController.deleteTimesheet);

module.exports = router;

// Timesheet.js

const mongoose = require('mongoose');

const timesheetSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  lineItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'LineItem' }],
  description: { type: String },
  rate: { type: Number, required: true }
});

module.exports = mongoose.model('Timesheet', timesheetSchema);

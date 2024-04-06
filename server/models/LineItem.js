// LineItem.js

const mongoose = require('mongoose');

const lineItemSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  minutes: { type: Number, required: true }
});

module.exports = mongoose.model('LineItem', lineItemSchema);
// lineItemController.js

const LineItem = require('../models/LineItem');

// Create a new line item
exports.createLineItem = async (req, res) => {
  try {
    const newLineItem = new LineItem(req.body);
    const savedLineItem = await newLineItem.save();
    res.status(201).json(savedLineItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all line items
exports.getAllLineItems = async (req, res) => {
  try {
    const lineItems = await LineItem.find();
    res.status(200).json(lineItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single line item by ID
exports.getLineItemById = async (req, res) => {
  try {
    const lineItem = await LineItem.findById(req.params.id);
    if (!lineItem) {
      return res.status(404).json({ message: 'Line item not found' });
    }
    res.status(200).json(lineItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a line item
exports.updateLineItem = async (req, res) => {
  try {
    const updatedLineItem = await LineItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedLineItem) {
      return res.status(404).json({ message: 'Line item not found' });
    }
    res.status(200).json(updatedLineItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a line item
exports.deleteLineItem = async (req, res) => {
  try {
    const deletedLineItem = await LineItem.findByIdAndDelete(req.params.id);
    if (!deletedLineItem) {
      return res.status(404).json({ message: 'Line item not found' });
    }
    res.status(200).json({ message: 'Line item deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// timesheetController.js

const Timesheet = require('../models/Timesheet');

// Create a new timesheet
exports.createTimesheet = async (req, res) => {
  try {
    const newTimesheet = new Timesheet(req.body);
    const savedTimesheet = await newTimesheet.save();
    res.status(201).json(savedTimesheet);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all timesheets
exports.getAllTimesheets = async (req, res) => {
  try {
    const timesheets = await Timesheet.find();
    res.status(200).json(timesheets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single timesheet by ID
exports.getTimesheetById = async (req, res) => {
  try {
    const timesheet = await Timesheet.findById(req.params.id);
    if (!timesheet) {
      return res.status(404).json({ message: 'Timesheet not found' });
    }
    res.status(200).json(timesheet);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a timesheet
exports.updateTimesheet = async (req, res) => {
  try {
    const updatedTimesheet = await Timesheet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTimesheet) {
      return res.status(404).json({ message: 'Timesheet not found' });
    }
    res.status(200).json(updatedTimesheet);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a timesheet
exports.deleteTimesheet = async (req, res) => {
  try {
    const deletedTimesheet = await Timesheet.findByIdAndDelete(req.params.id);
    if (!deletedTimesheet) {
      return res.status(404).json({ message: 'Timesheet not found' });
    }
    res.status(200).json({ message: 'Timesheet deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

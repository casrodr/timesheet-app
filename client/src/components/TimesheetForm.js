//Timesheetform

import React, { useState } from 'react';
import axios from 'axios';

const TimesheetForm = () => {
  const [date, setDate] = useState('');
  const [lineItems, setLineItems] = useState([]);
  const [description, setDescription] = useState('');
  const [rate, setRate] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { date, lineItems, description, rate };
    try {
      const response = await axios.post('/api/timesheets', formData);
      console.log(response.data); // Newly created timesheet
      // Reset form fields or update UI as needed
    } catch (error) {
      console.error('Error:', error);
      // Handle error and update UI
    }
  };

  const handleAddLineItem = () => {
    setLineItems([...lineItems, '']);
  };

  const handleLineItemChange = (index, value) => {
    const updatedLineItems = [...lineItems];
    updatedLineItems[index] = value;
    setLineItems(updatedLineItems);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          required 
        />
      </label>
      <br />
      <button type="button" onClick={handleAddLineItem}>
        Add Line Item
      </button>
      {lineItems.map((item, index) => (
        <div key={index}>
          <label>
            Line Item {index + 1}:
            <input 
              type="text" 
              value={item} 
              onChange={(e) => handleLineItemChange(index, e.target.value)} 
              required 
            />
          </label>
          <br />
        </div>
      ))}
      <label>
        Description:
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
      </label>
      <br />
      <label>
        Rate:
        <input 
          type="number" 
          value={rate} 
          onChange={(e) => setRate(e.target.value)} 
          required 
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TimesheetForm;
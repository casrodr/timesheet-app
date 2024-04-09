//timesheet list

import React from 'react';

const TimesheetList = ({ timesheets }) => {
  return (
    <div>
      <h2>Timesheets</h2>
      <ul>
        {timesheets.map(timesheet => (
          <li key={timesheet._id}>
            <div>
              <strong>Date:</strong> {timesheet.date}
            </div>
            <div>
              <strong>Description:</strong> {timesheet.description}
            </div>
            <div>
              <strong>Total Time:</strong> {/* Calculate total time */}
            </div>
            <div>
              <strong>Rate:</strong> {timesheet.rate}
            </div>
            <div>
              <strong>Total Cost:</strong> {/* Calculate total cost */}
            </div>
            {/* Additional details or actions if needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimesheetList;

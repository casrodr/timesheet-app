import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [timesheets, setTimesheets] = useState([]);
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState(0);

  useEffect(() => {
    Axios.get("http://localhost:5000/api/timesheets").then((response) => {
      setTimesheets(response.data);
    });
  }, []);

  const createTimesheet = () => {
    Axios.post("http://localhost:5000/api/timesheets", {
      date,
      description,
      rate,
    }).then((response) => {
      setTimesheets([...timesheets, response.data]);
    });
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Timesheet Application</h1>
        <p>Enter your timesheet details below:</p>
      </div>
      <div className="inputContainer">
        <input
          type="date"
          placeholder="Date..."
          value={date}
          onChange={(event) => {
            setDate(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Description..."
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Rate..."
          value={rate}
          onChange={(event) => {
            setRate(event.target.value);
          }}
        />
        <button onClick={createTimesheet}> Create Timesheet </button>
      </div>

      <div className="timesheetsDisplay">
        {timesheets.map((timesheet) => {
          return (
            <div key={timesheet._id}>
              <h1>Date: {timesheet.date}</h1>
              <h1>Description: {timesheet.description}</h1>
              <h1>Rate: {timesheet.rate}</h1>
              {/* Additional fields to display */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

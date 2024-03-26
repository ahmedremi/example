import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import React, { useState } from 'react';

function CalendarPage() {
  const [testDates, setTestDates] = useState([]);
  const [courseDates, setCourseDates] = useState([]);

  const handleTestDateChange = date => {
    const selectedTestDates = [...testDates];
    const index = selectedTestDates.findIndex(d => d.getTime() === date.getTime());

    if (index === -1) {
      selectedTestDates.push(date);
    } else {
      selectedTestDates.splice(index, 1);
    }

    setTestDates(selectedTestDates);
  };

  const handleCourseDateChange = date => {
    const selectedCourseDates = [...courseDates];
    const index = selectedCourseDates.findIndex(d => d.getTime() === date.getTime());

    if (index === -1) {
      selectedCourseDates.push(date);
    } else {
      selectedCourseDates.splice(index, 1);
    }

    setCourseDates(selectedCourseDates);
  };

  return (
    <div>
      <h1>Available Dates</h1>
      <div className="calendars">
        <div className="calendar">
          <h2>Test Dates</h2>
          <Calendar
            onChange={handleTestDateChange}
            value={testDates}
          />
          <h3>Selected Test Dates:</h3>
          <ul>
            {testDates.map(date => (
              <li key={date.getTime()}>{date.toDateString()}</li>
            ))}
          </ul>
        </div>
        <div className="calendar">
          <h2>Course Dates</h2>
          <Calendar
            onChange={handleCourseDateChange}
            value={courseDates}
          />
          <h3>Selected Course Dates:</h3>
          <ul>
            {courseDates.map(date => (
              <li key={date.getTime()}>{date.toDateString()}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default CalendarPage;
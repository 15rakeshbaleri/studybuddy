// src/components/CourseTracker.jsx
import React, { useState } from "react";

const CourseTracker = ({ courseId }) => {
  const [status, setStatus] = useState("Not Started"); // Initial status

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className="mt-3">
      <h4>Course Progress Tracker</h4>
      <select
        className="form-select"
        value={status}
        onChange={handleStatusChange}
      >
        <option value="Not Started">Not Started</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <p className="mt-2">
        Current Status: <strong>{status}</strong>
      </p>
    </div>
  );
};

export default CourseTracker;

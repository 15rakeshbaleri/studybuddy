import React, { useState, useEffect } from "react";

const CourseTracker = ({ courseId }) => {
  const [status, setStatus] = useState(
    localStorage.getItem(`courseStatus_${courseId}`) || "Not Started"
  );
  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setStatus(newStatus);
    localStorage.setItem(`courseStatus_${courseId}`, newStatus);
  };

  const resetTracker = () => {
    setStatus("Not Started");
    localStorage.removeItem(`courseStatus_${courseId}`);
  };

  return (
    <div className="mt-3">
      <h4>Course Progress Tracker</h4>
      <p>
        Tracking progress for course ID: <strong>{courseId}</strong>
      </p>
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
      <button className="btn btn-warning mt-2" onClick={resetTracker}>
        Reset Tracker
      </button>
    </div>
  );
};

export default CourseTracker;

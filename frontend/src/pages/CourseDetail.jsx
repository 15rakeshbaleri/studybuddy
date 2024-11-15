import React, { useState } from "react";
import { useParams } from "react-router-dom";
import courses from "../data/courses"; // Import courses data
import Style from "./CourseDetail.module.css";
import CourseTracker from "../components/CourseTracker"; // Import the CourseTracker component

const CourseDetail = () => {
  const { id } = useParams(); // Get the course ID from URL params
  const course = courses.find((c) => c.id === parseInt(id)); // Find the course by ID

  // Check if the course exists
  if (!course) {
    return <h2 className="text-danger">Course not found</h2>;
  }

  // State to track the watched videos
  const [watchedCount, setWatchedCount] = useState(0);
  const [completedVideos, setCompletedVideos] = useState(
    new Array(course.videos.length).fill(false)
  );

  const handleVideoClick = (index) => {
    setWatchedCount((prevCount) => prevCount + 1); // Increment watched count
    if (!completedVideos[index]) {
      markAsCompleted(index); // Mark as completed if not already
    }
  };

  const markAsCompleted = (index) => {
    setCompletedVideos((prevCompleted) => {
      const newCompleted = [...prevCompleted];
      newCompleted[index] = true; // Mark this video as completed
      return newCompleted;
    });
  };

  const totalVideos = course.videos.length;
  const completedCount = completedVideos.filter(Boolean).length; // Count completed videos
  const progressPercentage = ((completedCount / totalVideos) * 100).toFixed(2); // Calculate progress percentage

  return (
    <div className="container mt-4">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <h4>Course Details:</h4>
      <ul>
        <li>Instructor: Shradha</li>
        <li>Duration: 4 weeks</li>
        <li>Certification: Yes</li>
      </ul>
      <div className={`${Style["playlist-div"]}`}>
        {course.videos.map((video, index) => (
          <div key={index} className={`${Style["video-container"]}`}>
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${video.videoId}`}
              title={`YouTube video player ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onClick={() => handleVideoClick(index)} // Mark video as watched and increment count
            ></iframe>
            <p>{video.description}</p>
            <span
              className={`${
                completedVideos[index]
                  ? Style["completed"]
                  : Style["incomplete"]
              }`}
              onClick={() => markAsCompleted(index)} // Mark video as completed on click
            >
              {completedVideos[index] ? "⭐" : "☆"}
            </span>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className={`${Style["progress-container"]}`}>
        <div
          className={`${Style["progress-bar"]}`}
          style={{ width: `${progressPercentage}%` }}
        >
          {progressPercentage}%
        </div>
      </div>

      {/* Pass watched count to CourseTracker */}
      <CourseTracker count={watchedCount} />
    </div>
  );
};

export default CourseDetail;

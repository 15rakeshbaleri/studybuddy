import React, { useState } from "react";
import { useParams } from "react-router-dom";
import courses from "../data/courses"; // Importing courses data
import Style from "./CourseDetail.module.css";
import CourseTracker from "../components/CourseTracker"; // Assuming CourseTracker is a component that tracks video completion

const CourseDetail = () => {
  const { id } = useParams(); // Get the course ID from the URL params
  const course = courses.find((c) => c.id === parseInt(id)); // Find the course by ID

  if (!course) {
    return <h2 className="text-danger">Course not found</h2>;
  }

  const [watchedCount, setWatchedCount] = useState(0);
  const [completedVideos, setCompletedVideos] = useState(
    new Array(course.videos.length).fill(false)
  );

  const handleVideoClick = (index) => {
    setWatchedCount((prevCount) => prevCount + 1);
    if (!completedVideos[index]) {
      markAsCompleted(index);
    }
  };

  const markAsCompleted = (index) => {
    setCompletedVideos((prevCompleted) => {
      const newCompleted = [...prevCompleted];
      newCompleted[index] = true;
      return newCompleted;
    });
  };

  const totalVideos = course.videos.length;
  const completedCount = completedVideos.filter(Boolean).length;
  const progressPercentage = ((completedCount / totalVideos) * 100).toFixed(2);

  return (
    <div className="container mt-4">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <h4>Course Details:</h4>
      <ul>
        <li>Instructor: {course.instructor}</li>
        <li>Duration: {course.duration}</li>
        <li>Certification: {course.certification ? "Yes" : "No"}</li>
      </ul>
      <div className={Style["playlist-div"]}>
        {course.videos.map((video, index) => (
          <div key={index} className={Style["video-container"]}>
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${video.videoId}`}
              title={`YouTube video player ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onClick={() => handleVideoClick(index)} // Mark video as watched
            ></iframe>
            <p>{video.description}</p>
            <span
              className={
                completedVideos[index]
                  ? Style["completed"]
                  : Style["incomplete"]
              }
              onClick={() => markAsCompleted(index)}
            >
              {completedVideos[index] ? "⭐" : "☆"}
            </span>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className={Style["progress-container"]}>
        <div
          className={Style["progress-bar"]}
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

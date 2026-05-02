import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CourseTracker from "../components/CourseTracker";
import Style from "./CourseDetail.module.css";

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [watchedCount, setWatchedCount] = useState(0);
  const [completedVideos, setCompletedVideos] = useState([]);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/videos/${id}`
        );
        const courseData = response.data;
        setCourse(courseData);
        setCompletedVideos(new Array(courseData.video.length).fill(false)); // Initialize completed videos
      } catch (err) {
        console.error("Error fetching course data:", err);
        setError("Failed to load course data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  const handleVideoClick = debounce((index) => {
    if (!completedVideos[index]) {
      setWatchedCount((prevCount) => prevCount + 1);
      markAsCompleted(index);
    }
  }, 300);

  const markAsCompleted = (index) => {
    setCompletedVideos((prevCompleted) => {
      const newCompleted = [...prevCompleted];
      newCompleted[index] = true;
      return newCompleted;
    });
  };

  if (loading) return <h2 className="text-center text-primary">Loading...</h2>;
  if (error)
    return (
      <div className="text-center">
        <h2 className="text-danger">{error}</h2>
        <button
          className="btn btn-primary"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    );

  const totalVideos = course.video.length;
  const completedCount = completedVideos.filter(Boolean).length;
  const progressPercentage = ((completedCount / totalVideos) * 100).toFixed(2);

  return (
    <div className="container mt-4">
      <div className="text-center mb-4">
        <h2 className="text-primary">{course.title}</h2>
        <p>{course.description}</p>
      </div>

      <div className="mb-4">
        <h4>Course Details:</h4>
        <ul className="list-group">
          <li className="list-group-item">Playlist ID: {course.playlistId}</li>
          <li className="list-group-item">
            Created At: {new Date(course.createdAt).toLocaleString()}
          </li>
          <li className="list-group-item">
            Last Updated: {new Date(course.updatedAt).toLocaleString()}
          </li>
        </ul>
      </div>

      <div className={Style.maincontainers}>
        {course.video.map((video, index) => (
          <div key={video._id} className="col-md-3 mb-4">
            <div
              className={`${Style.cards} ${
                completedVideos[index] ? "completed" : ""
              }`}
            >
              <iframe
                className={Style.cardframe}
                width="100%"
                height="250"
                src={`https://www.youtube.com/embed/${video.videoId}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onClick={() => handleVideoClick(index)}
              ></iframe>
              <div className="card-body">
                <h5 className="card-title">{video.title}</h5>
                <button
                  className={`btn ${
                    completedVideos[index]
                      ? "btn-success"
                      : "btn-outline-warning"
                  }`}
                  onClick={() => markAsCompleted(index)}
                >
                  {completedVideos[index] ? "Completed" : "Mark as Complete"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={`${Style.quizcontainer}`}>
        <div className="text-center my-4">
          {/* Text above the quiz button */}
          <p className={`${Style.quizcontainertxt}`}>
            Test your knowledge with our quiz! Click below to get started.
          </p>

          {/* Quiz button that opens in a new tab */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeXZXlM8oZm3BuifcdadlrtrqIDaHe3mEREHEsnidXuucABaQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Take the Quiz
          </a>
        </div>
      </div>

      <div className="progress my-4">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          style={{ width: `${progressPercentage}%` }}
        >
          {progressPercentage}%
        </div>
      </div>

      <CourseTracker count={watchedCount} />
    </div>
  );
};

export default CourseDetail;

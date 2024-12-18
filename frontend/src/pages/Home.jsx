import React from "react";
import { Link } from "react-router-dom";
import courses from "../data/courses"; // Importing the courses data

const Home = () => {
  return (
    <div className="container mt-4">
      <h1>Welcome to the Online Course Platform!</h1>
      <p>Explore our courses below and start your learning journey today!</p>
      <h2>Available Courses</h2>
      <div className="row">
        {courses.map((course) => (
          <div className="col-md-4 mb-4" key={course.id}>
            {/* Each course is displayed in a card */}
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
                <Link
                  to={`/course-detail/${course.id}`}
                  className="btn btn-primary"
                >
                  View Course
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

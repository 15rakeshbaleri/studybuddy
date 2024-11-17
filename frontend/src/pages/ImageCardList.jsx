import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ImageCard from "./ImageCard";
import styles from "./ImageCardList.module.css";

const ImageCardList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/videos/");
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        Courses <span className={styles.allPosts}>All Courses</span>
      </h2>
      <div className={styles.grid}>
        {courses.map((course) => (
          <Link to={`/course/${course.playlistId}`} key={course.playlistId}>
            <ImageCard
              id={course.playlistId}
              imageUrl={`https://via.placeholder.com/300x200?text=${course.title}`}
              title={course.title}
              description={course.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ImageCardList;

import React from "react";
import { Link } from "react-router-dom";
import ImageCard from "./ImageCard";
import styles from "./ImageCardList.module.css";

import courses from "../data/courses";

const ImageCardList = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        Courses <span className={styles.allPosts}>All Courses</span>
      </h2>
      <div className={styles.grid}>
        {courses.map((course) => (
          <Link to={`/course/${course.id}`} key={course.id}>
            <ImageCard
              id={course.id}
              imageUrl={`https://via.placeholder.com/300x200?text=${course.title}`}
              title={course.title}
              category={course.category}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ImageCardList;

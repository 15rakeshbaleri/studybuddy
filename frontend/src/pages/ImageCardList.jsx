import React from "react";
import ImageCard from "./ImageCard";
import styles from "./ImageCardList.module.css";

// Sample courses data
const courses = [
  {
    id: 1,
    title: "Introduction to DSA",
    category: "Computer Science",
    imageUrl: "https://via.placeholder.com/300x200?text=DSA+Intro",
  },
  {
    id: 2,
    title: "Web Development Bootcamp",
    category: "Web Development",
    imageUrl: "https://via.placeholder.com/300x200?text=Web+Dev+Bootcamp",
  },
  {
    id: 3,
    title: "Machine Learning with Python",
    category: "AI & ML",
    imageUrl: "https://via.placeholder.com/300x200?text=ML+Python",
  },
  {
    id: 4,
    title: "Data Science Crash Course",
    category: "Data Science",
    imageUrl: "https://via.placeholder.com/300x200?text=Data+Science",
  },
  // Add more courses as needed
];

const ImageCardList = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        Courses <span className={styles.allPosts}>All Courses</span>
      </h2>
      <div className={styles.grid}>
        {courses.map((course) => (
          <ImageCard
            key={course.id}
            id={course.id} // Pass the course ID to the ImageCard
            imageUrl={course.imageUrl}
            title={course.title}
            category={course.category}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCardList;

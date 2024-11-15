import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import styles from "./ImageCard.module.css";

const ImageCard = ({ id, imageUrl, title, category }) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={imageUrl} alt={title} />
      <div className={styles.content}>
        <span className={styles.category}>{category}</span>
        <h3 className={styles.title}>{title}</h3>
        {/* Link to CourseDetail page */}
        <Link to={`/course-detail/${id}`} className={styles.learnMore}>
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ImageCard;

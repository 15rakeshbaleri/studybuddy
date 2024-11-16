import React from "react";
import styles from "./ImageCard.module.css";

function ImageCard({ id, title, category }) {
  return (
    <div className={styles.card} key={id}>
      <img
        src={`https://via.placeholder.com/300x200?text=${title}`}
        alt={title}
        className={styles.cardImage}
      />
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <p>{category}</p>
      </div>
    </div>
  );  
}

export default ImageCard;

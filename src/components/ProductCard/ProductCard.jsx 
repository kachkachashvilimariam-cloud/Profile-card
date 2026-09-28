import { useState } from "react";
import clsx from "clsx";
import styles from "./ProductCard.module.scss";

export function ProductCard({ image, title, price }) {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
        <button
          className={clsx(styles.likeBtn, {
            [styles.liked]: isLiked,
          })}
          onClick={toggleLike}
        >
          {isLiked ? "❤️" : "🤍"}
        </button>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>${price}</p>
        <button className={styles.addToCartBtn}>Add to Cart</button>
      </div>
    </div>
  );
}

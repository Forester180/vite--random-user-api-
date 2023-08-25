import React from "react";
import styles from '../../Pages/Main/Main.module.css'

function CardImg({ children }) {
  return (
    <>
      <div className={styles.main_img}>
        {children}
      </div>
    </>
  );
}

export default CardImg;

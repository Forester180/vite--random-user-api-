import React from "react";
import styles from '../../Pages/Main/Main.module.css'

function CardImgSec({ children }) {
  return (
    <>
      <div className={styles.secondary_img}>{children}</div>
    </>
  );
}

export default CardImgSec;

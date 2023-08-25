import React from "react";
import styles from '../Main.module.css'

function MainLinks({href, children}) {
  return (
    <>
      <a className={styles.main_link} href={href}>{children}
      </a>
    </>
  );
}

export default MainLinks;

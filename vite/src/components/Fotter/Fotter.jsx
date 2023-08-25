import React from "react";
import styles from "./Fotter.module.css";
import Title from "../UI/Title/Title";
import SubFotter from "../UI/Subtitle/SubFotter";
import TitleFotter from "../UI/Title/TitleFotter";

function Fotter() {
  return (
    <>
      <div className={styles.fotter}>
        <div className={styles.fotter_img}>
          <img
            src="../../../public/img/fox-svgrepo-com.svg"
            width="100"
            height="100"
            class="d-inline-block align-text-top"
          />
        </div>
        <div className={styles.fotter_text}>
          <TitleFotter title={`Горячая линия:`} />
          <SubFotter subtitle={`8-800-700-54-52`} />
        </div>
      </div>
    </>
  );
}

export default Fotter;

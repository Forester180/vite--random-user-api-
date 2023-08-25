import React from "react";
import "@bootstrap/bootstrap.css";
import styles from './Card.module.css'
import {clsx as cn} from 'clsx'

function Card({img, children}) {
  return (
    <div className={cn("card m-2 p-1", styles.card)}>
      <img src={img} className="card-img-top"></img>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

export default Card;

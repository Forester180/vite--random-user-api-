import React from 'react'
import '@bootstrap/bootstrap.css'
import {clsx as cn} from 'clsx'
import styles from './Title.module.css'

function Title({title}) {
  return (
    <>
        <h1 class={cn("card-title m-2 p-1 fs-1", styles.title)}>{title}</h1>
    </>
  )
}

export default Title
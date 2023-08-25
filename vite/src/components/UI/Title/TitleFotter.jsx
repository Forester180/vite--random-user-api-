import React from 'react'
import '@bootstrap/bootstrap.css'

function TitleFotter({title}) {
  return (
    <>
        <h1 class="card-title m-2 p-1 fs-3 text-light">{title}</h1>
    </>
  )
}

export default TitleFotter
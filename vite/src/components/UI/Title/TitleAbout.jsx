import React from 'react'
import '@bootstrap/bootstrap.css'

function TitleAbout({title}) {
  return (
    <>
        <h1 class="card-title m-5 p-1 fs-3">{title}</h1>
    </>
  )
}

export default TitleAbout
import React from 'react'
import '@bootstrap/bootstrap.css'

function Subtitle({subtitle}) {
  return (
    <>
        <p className="card-text m-2 p-1 fs-5">{subtitle}</p>
    </>
  )
}

export default Subtitle
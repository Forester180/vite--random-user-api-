import React from 'react'
import '@bootstrap/bootstrap.css'

function SubFotter({subtitle}) {
  return (
    <>
        <p className="card-text m-2 p-1 fs-5 text-warning">{subtitle}</p>
    </>
  )
}

export default SubFotter
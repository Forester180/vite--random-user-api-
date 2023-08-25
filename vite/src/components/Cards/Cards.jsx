import React from 'react'
import '@bootstrap/bootstrap.css'

function Cards({children}) {
  return (
    <div className='d-flex flex-wrap row-cols-xl-4 row-cols-xl-1 justify-content-center'>{children}</div>
  )
}

export default Cards
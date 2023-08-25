import React from 'react'
import Nav from '../Nav/Nav'
import NavLinks from '../Nav/NavLinks/NavLinks'
import Fotter from '../Fotter/Fotter'

function Layout({children}) {
  return (
    <>
        <Nav brand='Добрый Лис'>
            <NavLinks href='/' text='Движение'/>
            <NavLinks href='/cards' text='Лисята'/>
            <NavLinks href='/about' text='О нас'/>
        </Nav>
        <div className="container">{children}</div>
        <Fotter/>
    </>
  )
}

export default Layout
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import First from './components/Pages/First/First'
import {Route, Routes} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Main from './components/Pages/Main/Main'
import Police from './components/Pages/Main/Police/Police'
import Summer from './components/Pages/Main/Summer/Summer'
import Forest from './components/Pages/Main/Forest/Forest'
import PeopleHidden from './components/Pages/Main/PeopleHidden/PeopleHidden'
import About from './components/Pages/About/About'

function App() {

  const [user, setUser] = useState([])

  useEffect(() => {
    axios
    .get(`https://randomuser.me/api/?results=30`)
    .then((response) => {
      // console.log(response.data.results);
      setUser(response.data.results)
    })
  }, [])

console.log(user);

  return (
    <>
      <Layout>

        <Routes>
          <Route path='/'
          element={<Main/>}/>
          <Route path='/police'
            element={<Police/>}/>
          <Route path='/summer'
            element={<Summer/>}/>
          <Route path='/forest'
            element={<Forest/>}/>
          <Route path='/hidden'
            element={<PeopleHidden/>}/>

          <Route path='/cards'
          element={<First
          userData={user}
          />}/>

          <Route path='/about'
          element={<About/>}/>
        </Routes>

      </Layout>
    </>
  )
}

export default App
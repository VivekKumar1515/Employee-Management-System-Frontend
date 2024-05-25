import { useState } from 'react'


import './App.css'
import Navbar from './Components/Navbar'
import AddEmployee from './Components/AddEmployee'
import { Outlet } from 'react-router-dom'

function App() {

  
  return ( 
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App

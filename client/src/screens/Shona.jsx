import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'


function Shona() {
  return (
    <div>
        <Header />
        <Outlet />
    </div>
  )
}

export default Shona
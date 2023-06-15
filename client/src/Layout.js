import { Outlet } from "react-router-dom"

import React from 'react'
import Topbar from "./Component/Topbar/Topbar"

const Layout = () => {
  return (
    <div className="App">
        <Topbar/>
        <Outlet/>
    </div>
  )
}

export default Layout
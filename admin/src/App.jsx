import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add/Add'
import Orders from './pages/Orders/Orders'
import List from './pages/List/List'
  import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <ToastContainer/>
        <Navbar/>
        <hr />
        <div className="app-content">
          <Sidebar/>
          <Routes>
            <Route path = "/add" element = {<Add/>} />
            <Route path='/orders' element = {<Orders/>} />
            <Route path='/list' element = {<List/>} />
          </Routes>
        </div>
    </div>
  )
}

export default App
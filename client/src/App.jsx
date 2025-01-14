import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path='/'></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
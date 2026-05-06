import { Routes, Route } from 'react-router'
import { useState } from 'react'
import Homepage from './pages/Homepage.jsx'
import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path='/news/:id' />
    </Routes>
  )
}

export default App

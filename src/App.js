import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage'
const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
    </Routes>
  )
}

export default App
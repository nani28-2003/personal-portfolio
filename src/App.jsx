import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
const App = () => {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Projects' element={<Projects/>}/>
     </Routes>
     </div>
  )
}

export default App
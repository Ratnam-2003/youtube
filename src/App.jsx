import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Applayout from './layouts/Applayout'
import Home from './pages/Home'
import Nextvideo from './pages/Nextvideo'



function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Applayout/>}>
        <Route path='/' element={<Home/>}></Route>
        <Route path='videos/:id' element={<Nextvideo/>}></Route>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App

import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Signin from './pages/Signin'
import About from './pages/About'
import Profile from './pages/Profile'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/sigin-up' element={<SignUp/>} />
      <Route path='/sign-in' element={<Signin/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/profile' element={<Profile/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
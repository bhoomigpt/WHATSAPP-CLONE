import React from 'react'
import Main from './Components/Main'
import Signin from './Components/Signin'
import { Route, Routes } from 'react-router-dom'
import Chat from './Components/Chat'
import PhoneSignin from './Components/PhoneSignin'
//nothing
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/chat' element={<Chat/>}/>
        <Route path='/phone' element={<PhoneSignin/>}/>
      </Routes>
    </div>
  )
}

export default App
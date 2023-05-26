import React from 'react'
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom'
import Login from './Login'

function App() {
  return (
  <div className='app_container'>
  <Router>
    <Routes>
      <Route path='/' element={<Login/>}/>
    </Routes>
  </Router>
  </div>
  )
}

export default App
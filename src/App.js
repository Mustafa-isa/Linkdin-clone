import React from 'react'
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom'
import Login from './Login/Login'
import { Provider } from 'react-redux'

import store from  './redux/app/store'

function App() {
  return (
<Provider store={store}>
<div className='app_container'>
  <Router>
    <Routes>
      <Route path='/' element={<Login/>}/>
    </Routes>
  </Router>
  </div>
</Provider>
  )
}

export default App
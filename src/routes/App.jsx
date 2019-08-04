import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Login from '../pages/Login'
import Timeline from '../pages/Timeline'
import { connect } from 'react-redux'
import { setLogin, setUser } from '../actions'
import { auth } from '../utils/firebase'

const App = props =>  {

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if(user) {
        props.setUser(user)
        props.setLogin(true)
      }
    })
  }, [])

  return (
    <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/timeline' component={Timeline} />
          <Route component={() => <h1 className='text-center mt-5'>404 Not found 😯</h1>} />
        </Switch>
      <Footer />
    </BrowserRouter>
  )
}

const mapDispatchToProps = {
  setLogin, 
  setUser
}

export default connect(null, mapDispatchToProps)(App)
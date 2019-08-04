import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Login from '../pages/Login'
import Timeline from '../pages/Timeline'

const App = () =>  {
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

export default App
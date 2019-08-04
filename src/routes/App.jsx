import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Login from '../pages/Login'
import Timeline from '../pages/Timeline'

const App = () =>  {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/timeline' component={Timeline} />
          <Route component={() => <h1 className='text-center mt-5'>404 Not found 😯</h1>} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
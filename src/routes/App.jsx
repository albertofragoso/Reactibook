import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import TimeLine from '../pages/Timeline'

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/timeline" component={TimeLine} />
        <Route component={() => <h1 className="text-center mt-5">404 Not found 😯</h1>} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App
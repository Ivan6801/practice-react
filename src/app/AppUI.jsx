import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout'
import { App } from '../components/App'

function AppUl() {
  return (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch> 
    </Layout>
  </BrowserRouter>
  )
}

export default AppUl;
import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Nosotros } from "../pages/Nosotros";
import User from "../pages/User";
import { Header } from './Header'
import { Footer } from './Footer'

const App = () => {
  return (
    <Router>
      <Header />
      <hr />
      <Switch>
        <Route path="/character/:id">
          <User />
        </Route>
        <Route path="/">
          <Nosotros />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export { App } 

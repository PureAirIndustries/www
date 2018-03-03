import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from './Home'
import Blog from './Blog'
import Resources from './Resources'
import Funding from './Funding'
import Privacy from './Privacy'
import Terms from './Terms'
import Team from './Team'

class Routes extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/resources' component={Resources} />
          <Route exact path='/funding' component={Funding} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/privacy' component={Privacy} />
          <Route exact path='/tos' component={Terms} />
          <Route path='/ico'>
            <Redirect to='http://airbastion.herokuapp.com' />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default Routes

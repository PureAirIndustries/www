import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Blog from './Blog'
import Resources from './Resources'
import Funding from './Funding'
import Privacy from './Privacy'
import Terms from './Terms'
import { Team } from './Team'
import Redirect from './Redirect';
import Loader from './Loader';

class Routes extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/blog'
            component={Loader}
          /> // redirect to blog.pureairindustries.cm
          <Route exact path='/resources' component={Resources} />
          <Route exact path='/funding' component={Funding} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/privacy' component={Privacy} />
          <Route exact path='/tos' component={Terms} />
          <Route path='/ico'
            component={Loader}
            location={{
              state: {
                redirectPath: "http://airbastion.herokuapp.com/ico?utm_pai",
                redirectToTitle: "You're being redirected to our current ICO page"
              }
            }}
          />
        </Switch>
      </Router>
    )
  }
}

export default Routes

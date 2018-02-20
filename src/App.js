import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Blog from './Blog'
import Resources from './Resources'
import Funding from './Funding'
import Privacy from './Privacy'
import Terms from './Terms'

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/resources' component={Resources} />
          <Route exact path='/funding' component={Funding} />
          <Route exact path='/privacy' component={Privacy} />
          <Route exact path='/tos' component={Terms} />
        </Switch>
      </Router>
    )
  }
}

export default App

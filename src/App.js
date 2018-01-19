import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Blog from './Blog'
import Ico from './Ico'

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/blog' component={Blog} />
          <Route path='/ICO' component={Ico} />
        </Switch>
      </Router>
    )
  }
}

export default App

import React from "react";
import { Route } from "react-router-dom";
import Home from './Home'
import Blog from './Blog'
import Funding from './Funding'
import Privacy from './Privacy'
import Terms from './Terms'
import { Team } from './Team'
import Loader from './Loader';

export default (
  <Route>
    <Route exact path="/" component={Home} />
    <Route exact path="/blog" component={Loader} />
    <Route exact path="/funding" component={Funding} />
    <Route exact path="/team" component={Team} />
    <Route exact path="/privacy" component={Privacy} />
    <Route exact path="/proposals" component={Privacy} />
    <Route exact path="/tos" component={Terms} />
    <Route
      exact
      path="/ico"
      component={Loader}
      location={{
        state: {
          redirectPath:
            "https://airbastion.herokuapp.com/ico?utm_source=http://pureairindustries.com",
          redirectToTitle: "You're being redirected to our current ICO page"
        }
      }}
    />
  </Route>
);

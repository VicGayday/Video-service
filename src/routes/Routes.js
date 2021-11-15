import React from "react";
import { Switch, Route, Redirect } from "react-router";
// import { Link } from 'react-router-dom'
// import { privateRoutes, publicRoutes } from ".";

import Films from '../pages/films/Films'
import Channels from '../pages/channels/Channels'

const Routes = () => {

  // const auth = false

  // return auth ? (
    return (

      <Switch>

        <Route exact path="/films" component={Films} />
        <Route exact path="/channels" component={Channels} />
        {/* {privateRoutes.map((item) => (
        <Route
          path={item.path}
          exact={item.exact}
          component={item.component}
          key={item.path}
        />
      ))}
      <Redirect to="/" />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((item) => (
        <Route
          path={item.path}
          exact={item.exact}
          component={item.component}
          key={item.path}
        />
      ))}
      <Redirect to="/login" />
    // </Switch> */}
      </Switch>
    );
};

export default Routes;

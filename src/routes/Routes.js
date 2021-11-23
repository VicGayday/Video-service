import React from "react";
import { Switch, Route } from "react-router";

import Films from '../pages/films/Films'
import Channels from '../pages/channels/Channels'

const Routes = () => {

    return (

      <Switch>

        <Route exact path="/" component={Films} />
        <Route exact path="/channels" component={Channels} />

      </Switch>
    );
};

export default Routes;

import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Home from "../pages/home/index";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

import React from "react";
import { Route, Switch } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import Customers from "./pages/Customers";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={DashBoard}></Route>
        <Route path="/Customers" component={Customers}></Route>
      </Switch>
    </div>
  );
};

export default Routes;

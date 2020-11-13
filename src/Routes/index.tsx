import * as ROUTES from "./routes";

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "../Pages/Main";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.MAIN} component={Main} />
        {/* <Route exact path={exactROUTES.DETAIL} component={Main} /> */}
        {/* <Route  path="*" component={Main} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

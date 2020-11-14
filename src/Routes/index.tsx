import * as ROUTES from "./routes";

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "../Pages/Main";
import Detail from "Pages/Detail";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.MAIN} component={Main} />
        <Route exact path={`${ROUTES.DETAIL}/:countryName`} component={Detail} />
        {/* <Route  path="*" component={Main} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

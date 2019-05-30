import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import User from "./User";

function UiRouter() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={App} />
      <Route path="/:user_name" exact component={User} />
    </BrowserRouter>
  );
}

export default UiRouter;

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, Register, Login } from "./pages/index.js";
import { Navigation } from "./Componets/index.js";
const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

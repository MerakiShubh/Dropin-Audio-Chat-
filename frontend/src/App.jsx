import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Home from "./pages/Home/Home";
import { Home, Register } from "./pages/index.js";
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
      </Switch>
    </BrowserRouter>
  );
};

export default App;

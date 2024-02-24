import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Home } from "./pages/index.js";
import { Navigation } from "./Componets/index.js";
import Authentication from "./pages/authentication/Authentication.jsx";
import Activate from "./pages/Activate/Activate.jsx";
import Rooms from "./pages/Rooms/Rooms.jsx";

const isAuth = false;
const user = {
  activate: false,
};

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <GuestRoute path="/" exact>
          <Home />
        </GuestRoute>
        <GuestRoute path="/authenticate">
          <Authentication />
        </GuestRoute>
        <SemiprotectedRoute path="/activate">
          <Activate />
        </SemiprotectedRoute>
        <ProtectedRoute path="/rooms">
          <Rooms />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
};

const GuestRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isAuth ? (
          <Redirect
            to={{
              pathname: "/rooms",
              state: { from: location },
            }}
          />
        ) : (
          children
        );
      }}
    />
  );
};

const SemiprotectedRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return !isAuth ? (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        ) : isAuth && !user.activate ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/rooms",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

const ProtectedRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return !isAuth ? (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        ) : isAuth && !user.activate ? (
          <Redirect
            to={{
              pathname: "/activate",
              state: { from: location },
            }}
          />
        ) : (
          children
        );
      }}
    />
  );
};

export default App;

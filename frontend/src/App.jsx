import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Home } from "./pages/index.js";
import { Navigation } from "./Componets/index.js";
import Authentication from "./pages/authentication/Authentication.jsx";
import Activate from "./pages/Activate/Activate.jsx";
import Rooms from "./pages/Rooms/Rooms.jsx";
import PropTypes from "prop-types";

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

GuestRoute.propTypes = {
  children: PropTypes.node,
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

SemiprotectedRoute.propTypes = {
  children: PropTypes.node,
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

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};

export default App;

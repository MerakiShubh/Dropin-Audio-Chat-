import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Navigation from "./Componets/shared/Navigation/Navigation.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Navigation />}>
      <Route path="/" element={<Home />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

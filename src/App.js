import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Browse, Signin, Signup } from "./pages";
import { useAuthListener } from "./hooks";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";

export function App() {
  const { user } = useAuthListener();

  return (
    <BrowserRouter basename="/react-netflix-clone">
      <Switch>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
        >
          <Signin />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
        >
          <Signup />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
        >
          <Home />
        </IsUserRedirect>
      </Switch>
    </BrowserRouter>
  );
}

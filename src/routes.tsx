/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
import { BrowserRouter as Router, RouteProps, Switch, Route, Redirect } from 'react-router-dom';

import HomePage from 'pages/Home';
import SignInPage from 'pages/SignIn';

interface PrivateRouteProps extends RouteProps {
  children?: React.ReactNode;
  isSignedIn?: boolean;
}

const PrivateRoute = ({ children, isSignedIn, ...rest }: PrivateRouteProps) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isSignedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/sign-in',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

const RootRoute: FC = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" isSignedIn={true}>
          <HomePage />
        </PrivateRoute>
        <Route path="/sign-in">
          <SignInPage />
        </Route>
        <Route path="/sign-up">
          <SignInPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default RootRoute;

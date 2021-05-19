/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
import { BrowserRouter as Router, RouteProps, Switch, Route, Redirect } from 'react-router-dom';

import HomePage from 'pages/Home';
import SignInPage from 'pages/SignIn';

interface PrivateRouteProps extends RouteProps {
  // tslint:disable-next-line:no-any
  component?: any;
  isSignedIn?: boolean;
}

const PrivateRoute = ({ component, isSignedIn, ...rest }: PrivateRouteProps) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isSignedIn ? (
          component
        ) : (
          <Redirect
            to={{
              pathname: '/login',
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
        <PrivateRoute path="/" exact component={HomePage} />
        <Route path="/sign-in" exact component={SignInPage} />
        <Route path="/sign-up" exact component={SignInPage} />
      </Switch>
    </Router>
  );
};

export default RootRoute;

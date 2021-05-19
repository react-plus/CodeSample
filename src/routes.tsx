/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
import { BrowserRouter as Router, RouteProps, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import HomePage from 'pages/Home';
import SignInPage from 'pages/SignIn';
import SignUpPage from 'pages/SignUp';
import { authSelector } from 'containers/Auth/selector';

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
  const auth = useSelector(authSelector);
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/sign-in">
            <SignInPage />
          </Route>
          <Route path="/sign-up">
            <SignUpPage />
          </Route>
          <PrivateRoute isSignedIn={!!auth.token}>
            <HomePage />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
};

export default RootRoute;

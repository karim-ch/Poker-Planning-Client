import React from 'react';
import { Route as DomRoute, Redirect } from 'react-router-dom';

const Route = ({
  component: Component,
  isAuthenticated,
  redirectTo,
  ...rest
}) => (
  <DomRoute
    {...rest}
    render={() => {
      console.log(isAuthenticated);
      return isAuthenticated ? (
        <Component {...rest} />
      ) : (
        <Redirect to={redirectTo} />
      );
    }}
  />
);

Route.defaultProps = {
  isAuthenticated: true,
};

export default Route;

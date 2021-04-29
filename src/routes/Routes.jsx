import React from 'react';
import { isEmpty } from 'lodash';
import { Switch, Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Login from '../pages/Login';
import history from '../shared/utils/history';
import Route from '../components/atoms/Route';
import useLoggedUser from './useLoggedUser';

const Routes = () => {
  const { loading, user } = useLoggedUser();

  return (
    <Router history={history}>
      {!loading && (
        <Switch>
          <Route
            path="/login"
            component={Login}
            isAuthenticated={isEmpty(user)}
            redirectTo="/app/dashboard"
          />
          <Route
            path="/"
            component={AppRoutes}
            isAuthenticated={!isEmpty(user)}
            redirectTo="/login"
          />
        </Switch>
      )}
      {loading && <div>Loading...</div>}
    </Router>
  );
};
export default Routes;

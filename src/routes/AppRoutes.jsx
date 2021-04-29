import React from 'react';
import { Switch } from 'react-router-dom';
import Route from '../components/atoms/Route';
import Dashboard from '../pages/Dashboard';
import Layout from '../shared/Layout';
import Doc from '../pages/Document';

const AppRoutes = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/app/dashboard" component={Dashboard} />
      <Route exact path="/app/doc/:id" component={Doc} />
    </Switch>
  </Layout>
);

export default AppRoutes;

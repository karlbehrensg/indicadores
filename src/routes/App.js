import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Layout from '../components/Layout';
import Tablero from '../containers/Tablero';
import CierreProcesos from '../containers/CierreProcesos';
import NotFound from '../containers/NotFound';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/tablero' component={Tablero} />
        <Route exact path='/cierre-procesos' component={CierreProcesos} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;

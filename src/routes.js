import { BrowserRouter, Switch, Route} from 'react-router-dom';
import React from 'react';
import Main from './pages/Main';
import Champions from './pages/Champions/geral';
import ChampionsInterna from './pages/Champions/interna';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/champions" exact component={Champions}/>
        <Route path="/champions/:key" exact component={ChampionsInterna}/>
      </Switch>
    </BrowserRouter>
  );
}

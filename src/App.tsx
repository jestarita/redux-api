import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";

/*Components */
import Home  from './components/Home/Home';
import Navegation from './components/Navegation/Navegation';
import Countries from './components/Countries/Countries';
import Genres from './components/Genres/Genres';

/*para redux */

import { Provider } from 'react-redux';
import store from './redux/root';
import Detail from './components/detail/Detail';
import Movies_Detail from './components/Movies_Detail/Movies_Detail';

function App() {
  return (
    <Router>
      <header>
      <Navegation />
      </header>
     
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-xl-12">
      <React.StrictMode>
      <Provider store={store}>   
      <Switch>
        <Route path="/movies">
          <Genres />
        </Route>
        <Route path="/countries">
          <Countries />
        </Route>
        <Route path="/detalle/:pais" component={Detail}>
        </Route>

        <Route path="/movie-detail/:peli" component={Movies_Detail}>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </Provider>
      </React.StrictMode>
    </div>
    </div>
    </div>
  </Router>
  );
}

export default App;

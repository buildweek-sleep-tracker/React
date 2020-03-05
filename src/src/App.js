import React from 'react';
import './App.css';

import Login from './components/Login'
import MainPage from './components/MainPage'

import { BrowserRouter as Router,
  Route,
  Link,
  Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/Login'>
          {/* <Login/> */}
        </Route>
        <Route path='/HomePage'>
          <MainPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

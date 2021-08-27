import React from 'react';
import {
    BrowserRouter as Router, 
    Switch, 
    Route, 
    Link
} from 'react-router-dom';

import Home from './home';
import User from './user';
import About from './about';


const App = ({title}) => {
    return (
    <>
    <div className="header">{title}</div>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">User</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <User />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
    );
}

export default App;
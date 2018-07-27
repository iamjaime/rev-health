import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './pages/home/home';

class App extends Component {
  render() {
    return (
      <div>
          <Router>
              <div>
                  <Switch>
                      <Route exact={true} path="/" component={ HomePage }/>
                  </Switch>
              </div>
          </Router>
      </div>
    );
  }
}

export default App;

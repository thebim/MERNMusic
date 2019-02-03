import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import { TopNavbar } from './components';
import { Browse, Artist } from "./pages";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <TopNavbar />
            <Switch>
              <Route exact path="/browse" component={Browse} />
              <Route exact path="/artist/:id" component={Artist} />
              <Redirect from="*" to="/browse" />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={store}>
        <MusicPlayer />
      </Provider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <MusicPlayer />
      </div>
    );
  }
}

export default App;

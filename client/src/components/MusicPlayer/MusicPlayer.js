import React, { Component } from 'react';
import './MusicPlayer.css';
import {VerticalAlign} from "../VerticalAlign";

class MusicPlayer extends Component {
  render() {
    return (
      <div className="music-player">
        <VerticalAlign>
          <div className="container-fluid">
            <div className="row">
              <img className="track-img col" src="http://via.placeholder.com/50x50" />
              <div className="col-9">
                <p className="track-name">24/7</p>
                <p className="artist-name">Meek Mill ft. Ella Mai</p>
              </div>
            </div>
          </div>
        </VerticalAlign>
      </div>
    );
  }
}

export default MusicPlayer;
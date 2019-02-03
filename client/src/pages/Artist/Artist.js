import React, { Component } from 'react';
import { getArtistInfo } from "../../api/api";
import ArtistBanner from "./ArtistBanner";
import './Artist.css';
import { Widget, MusicGrid } from "../../components";

class Artist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: {},
      loading: true
    }
  }

  componentDidMount() {
    this.getArtistInfo(this.props.match.params.id);
  }

  getArtistInfo(artistId) {
    this.setState({ loading: true }, () => {
      getArtistInfo(artistId)
        .then(res => {
          this.setState({
            artist: res.data,
            loading: false
          });
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    });
  }

  render() {
    const { artist } = this.state;
    if (this.state.loading) return <p>Loading...</p>;

    return (
      <div>
        <ArtistBanner artistInfo={artist.info} />
        <div className="body-container container">
          <Widget title={{ text: 'Latest Releases' }}>
            <MusicGrid type="album" items={artist.albums.items} />
          </Widget>
        </div>
      </div>
    )
  }
}

export default Artist;
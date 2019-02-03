import React, { Component } from 'react';
import { Widget, MusicGrid } from '../../../components/index';
import { getNewReleases } from "../../../api/api";

class NewReleases extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newReleases: [],
      loading: false,
      error: false,
      hasMore: true,
      offset: 0
    };
    this.getNewReleases = this.getNewReleases.bind(this);

    // Binding infinite scroll.
    window.onscroll = () => {
      const {
        getNewReleases,
        state: {
          error,
          loading,
          hasMore,
          offset
        }
      } = this;
      if (error || loading || !hasMore) return;
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
        getNewReleases(offset);
      }
    };
  }

  componentDidMount() {
    this.getNewReleases(0);
  }

  getNewReleases(offset) {
    this.setState({ loading: true }, () => {
      getNewReleases(offset)
        .then(res => {
          this.setState({
            hasMore: (this.state.newReleases.length < res.data.albums.total),
            loading: false,
            offset: this.state.offset + 20,
            newReleases: [
              ...this.state.newReleases,
              ...res.data.albums.items
            ]
          });
        })
        .catch(err => {
          this.setState({
            error: err.message,
            loading: false
          });
        });
    });
  }

  render() {
    return (
      <Widget title={{
        text: 'New Releases',
        actionText: 'View More',
        actionUrl: '#' }}
      >
        <MusicGrid type="albums" items={this.state.newReleases} />
        {
          this.state.loading && <p style={{textAlign: 'center'}}>Loading...</p>
        }
      </Widget>
    );
  }
}

export default NewReleases;

import React, { Component } from 'react';
import { Widget, MusicGrid } from '../../../components/index';
import { getGenres } from "../../../api/api";

class GenresTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      loading: false,
      error: false,
      hasMore: true,
      offset: 0
    };
    this.getGenres = this.getGenres.bind(this);

    // Binding infinite scroll.
    window.onscroll = () => {
      const {
        getGenres,
        state: {
          error,
          loading,
          hasMore,
          offset
        }
      } = this;
      if (error || loading || !hasMore) return;
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
        getGenres(offset);
      }
    };
  }

  componentDidMount() {
    this.getGenres(0);
  }

  getGenres(offset) {
    this.setState({ loading: true }, () => {
      getGenres(offset)
        .then(res => {
          this.setState({
            hasMore: (this.state.genres.length < res.data.categories.total),
            loading: false,
            offset: this.state.offset + 20,
            genres: [
              ...this.state.genres,
              ...res.data.categories.items
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
        text: 'Genres & Moods',
        actionText: 'View More',
        actionUrl: '#' }}
      >
        <MusicGrid type="genre" items={this.state.genres} />
        {
          this.state.loading && <p style={{textAlign: 'center'}}>Loading...</p>
        }
      </Widget>
    );
  }
}

export default GenresTab;

import React from 'react';
import PropTypes from 'prop-types';
import AlbumGridItem from './AlbumGridItem';
import GenreGridItem from './GenreGridItem';
import './MusicGrid.css';

const MusicGrid = (props) => {
  return (
    <div className="row">
      { props.type === 'album' && (props.items.map((item, idx) => <AlbumGridItem key={idx} item={item} />)) }
      { props.type === 'genre' && (props.items.map((item, idx) => <GenreGridItem key={idx} item={item} />)) }
    </div>
  )
};

MusicGrid.propTypes = {
  type: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
};

export default MusicGrid;
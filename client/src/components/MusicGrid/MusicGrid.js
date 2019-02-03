import React from 'react';
import PropTypes from 'prop-types';
import MusicGridItem from "./MusicGridItem";
import './MusicGrid.css';

const MusicGrid = (props) => {
  return (
    <div className="row">
      { props.items.map((item, idx) => <MusicGridItem key={idx} item={item} />) }
    </div>
  )
};

MusicGrid.propTypes = {
  type: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
};

export default MusicGrid;
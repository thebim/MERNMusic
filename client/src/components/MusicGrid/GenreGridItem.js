import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const GenreGridItem = (props) => {
  const { item } = props;
  return (
    <div className="grid-item genre col-lg-2 col-md-3 col-sm-6 col-xs-12">
      <img className="grid-item-img" src={item.icons[0].url} />
      <div className="grid-item-details">
        <p className="grid-item-title"><Link to="/" title={item.name}>{ item.name }</Link></p>
      </div>
    </div>
  )
};

GenreGridItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default GenreGridItem;
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { shortenText } from "../../utilities/textFormatter";

const MusicGridItem = (props) => {
  const { item } = props;
  return (
    <div className="grid-item col-lg-2 col-md-3 col-sm-6 col-xs-12">
      <img className="grid-item-img" src={item.images[0].url} />
      <div className="grid-item-details">
        <p className="grid-item-title"><a href="#" title={item.name}>{ shortenText(item.name, 16) }</a></p>
        <p className="grid-item-artist">
          <Link className="btn btn-sm btn-primary" to={`/artist/${item.artists[0].id}`}>{ item.artists[0].name }</Link>
        </p>
      </div>
    </div>
  )
};

MusicGridItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default MusicGridItem;
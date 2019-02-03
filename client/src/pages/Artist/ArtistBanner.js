import React from 'react';
import { VerticalAlign, PopularityMeter } from "../../components";

const ArtistBanner = (props) => {
  const { name, images, genres, popularity } = props.artistInfo;
  return (
    <div className="banner-container">
      <div className="container">
        <div className="row">
          <div className="col-3 artist-banner-img">
            <img src={images[0].url} style={{ width: '100%' }} alt={name} />
            <PopularityMeter percentage={popularity} />
          </div>
          <div className="col-9 artist-banner-info">
            <VerticalAlign>
              <h4>{ name }</h4>
              <ul className="hz-btn-list">
                {genres.slice(0, 5).map(genre => (
                  <li><button className="btn btn-sm btn-primary genre-list-btn">{ genre }</button></li>
                ))}
              </ul>
            </VerticalAlign>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ArtistBanner;
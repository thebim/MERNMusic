import React from 'react';
import classnames from 'classnames';

const progressContainerStyle = {
  height: '20px',
  borderRadius: '0'
};

const progressTextStyle = {
  textAlign: 'center',
  position: 'absolute',
  width: '100%',
  left: '0'
};

const PopularityMeter = (props) => {
  return (
    <div className="progress" style={progressContainerStyle}>
      <p style={progressTextStyle}>
        {`${props.percentage}% Popularity`}
      </p>
      <div
        className={classnames(
          "progress-bar",
          { "bg-warning": (props.percentage > 60 && props.percentage < 85) },
          { "bg-danger": (props.percentage > 85) }
        )}
        role="progressbar"
        style={{ width: `${props.percentage}%` }}
        aria-valuenow={`${props.percentage}`}
        aria-valuemin="0"
        aria-valuemax="100"
      />
    </div>
  );
};

export default PopularityMeter;
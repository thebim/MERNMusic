import React from 'react';

const outerContainerStyle = {
  display: 'table',
  height: '100%',
  width: '100%',
};

const innerContainerStyle = {
  display: 'table-cell',
  verticalAlign: 'middle'
};

export const VerticalAlign = (props) => {
  return (
    <div style={outerContainerStyle} {...props}>
      <div style={innerContainerStyle}>
        { props.children }
      </div>
    </div>
  );
};
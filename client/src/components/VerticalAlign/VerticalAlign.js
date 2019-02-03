import React from 'react';
import { outerContainerStyle, innerContainerStyle } from "./styles";

const VerticalAlign = (props) => {
  return (
    <div style={outerContainerStyle} {...props}>
      <div style={innerContainerStyle}>
        { props.children }
      </div>
    </div>
  );
};

export default VerticalAlign;
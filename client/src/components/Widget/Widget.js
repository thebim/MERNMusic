import React from 'react';
import PropTypes from 'prop-types';
import WidgetTitle from "./WidgetTitle";
import './WidgetStyles.css';

const Widget = (props) => {
  return (
    <div className="widget">
      <WidgetTitle title={props.title} />
      <div className="widget-body">
        { props.children }
      </div>
    </div>
  )
};

Widget.propTypes = {
  title: PropTypes.object.isRequired
};

export default Widget;
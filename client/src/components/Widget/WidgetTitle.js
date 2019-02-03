import React from 'react';
import PropTypes from 'prop-types';

const WidgetTitle = (props) => {
  const { title } = props;
  if (title.actionUrl) {
    return (
      <div className="widget-title">
        <h4>{ title.text }</h4>
        <a className="float-right btn btn-sm btn-primary" href={title.actionUrl}>{title.actionText}</a>
        <div className="clearfix" />
      </div>
    );
  } else {
    return (
      <div className="widget-title">
        <h4>{ title.text }</h4>
      </div>
    );
  }
};

WidgetTitle.propTypes = {
  title: PropTypes.object.isRequired
};

export default WidgetTitle;
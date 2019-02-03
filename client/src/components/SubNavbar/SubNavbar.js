import React from 'react';
import './SubNavbar.css';

const SubNavbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-sub navbar-light bg-light">
      <div className="container">
        <div className="collapse navbar-collapse" id="subNavbarSupportedContent">
          { props.children }
        </div>
      </div>
    </nav>
  );
};

export default SubNavbar;
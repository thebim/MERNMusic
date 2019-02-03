import React from 'react';
import { SubNavbar } from '../../components';
import classNames from 'classnames';

const NavTabs = (props) => {
  return (
    <SubNavbar>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <span className={classNames('nav-link', {'active': props.activeTab === 'New Releases'})}
            onClick={() => { props.changeTab('New Releases') }}>
            New Releases
            { props.activeTab === 'New Releases' && <span className="sr-only">(current)</span> }
          </span>
        </li>
        <li className="nav-item">
          <span className={classNames('nav-link', {'active': props.activeTab === 'Genres'})}
             onClick={() => { props.changeTab('Genres') }}>
            Genres & Moods
            { props.activeTab === 'Genres' && <span className="sr-only">(current)</span> }
          </span>
        </li>
        <li className="nav-item">
          <span className={classNames('nav-link', {'active': props.activeTab === 'Charts'})}
             onClick={() => { props.changeTab('Charts') }}>
            Charts
            { props.activeTab === 'Charts' && <span className="sr-only">(current)</span> }
          </span>
        </li>
      </ul>
    </SubNavbar>
  )
};

export default NavTabs;
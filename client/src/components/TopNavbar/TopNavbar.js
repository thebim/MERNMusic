import React from 'react';
import { NavLink } from 'react-router-dom';
import './TopNavbar.css';

const TopNavbar = () => {
  const isLoggedIn = false;
  return (
    <nav className="navbar navbar-expand-lg navbar-main navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">MERN Music</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/browse">Browse</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/library">Your Library</NavLink>
            </li>
          </ul>

          { isLoggedIn ? (
            <ul className="navbar-nav ml-auto">
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  PlaceholderUser123
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Profile</a>
                  <a className="dropdown-item" href="#">Settings</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Logout</a>
                </div>
              </li>
            </ul>
            ) : (
              <ul className="navbar-nav ml-auto">
                <form className="form-inline my-2 my-lg-0">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>

                <li className="nav-item">
                  <a className="nav-link" href="#">Register</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Login</a>
                </li>
              </ul>
            )
          }
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
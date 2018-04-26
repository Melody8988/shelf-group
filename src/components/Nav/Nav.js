import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="navbar">
    <div>
      <ul>
        <li>
          <Link to="/user">
            View Shelf Items
          </Link>
        </li>
        <li>
          <Link to="/info">
            Add Shelf Item
          </Link>
        </li>
        <li>
          <Link to="/userinfo">
            User Info Page
          </Link>
        </li>
      </ul>
    </div>
  </div>
  //test
);

export default Nav;

import React from 'react';
import { Link } from 'react-router-dom';

function AppNav() {
  return (
    <div>
    <nav>
      <ul>
        {/* <li><Link to="/HomeScreen">Home</Link></li> */}
        <li><Link to="/SignIn">SignIn</Link></li>
        <li><Link to="/SignUp">SignUp</Link></li>
      </ul>
    </nav>
    </div>
  );
}

export default AppNav;


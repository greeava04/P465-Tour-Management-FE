import React from 'react';
<<<<<<< HEAD
import { Link, Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';

function AppNav() {
  return (
    //we will need to create protected routes when we get authentication up
    //so that users wont be able to go to authenticated screens unless they're authenticated
    <Routes>
    <Route path="/" element={<HomeScreen />} />
    <Route path="/SignIn" element={<SignIn />} />
    <Route path="/SignUp" element={<SignUp />} />
  </Routes>
=======
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
>>>>>>> 0f13eba559aa6b8832df93a423bf775f67469a89
  );
}

export default AppNav;


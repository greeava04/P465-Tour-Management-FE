import React from 'react';
import { Link, Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';

function AppNav() {
  return (
    <Routes>
    <Route path="/" element={<HomeScreen />} />
    <Route path="/SignIn" element={<SignIn />} />
    <Route path="/SignUp" element={<SignUp />} />
  </Routes>
  );
}

export default AppNav;


import React from 'react';
import { Link, Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import ForgotPassword from './screens/ForgotPassword'

function AppNav() {
  return (
    //we will need to create protected routes when we get authentication up
    //so that users wont be able to go to authenticated screens unless they're authenticated
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
    </Routes>

  );
}

export default AppNav;


import React from 'react';
import { Link, Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import ForgotPassword from './screens/ForgotPassword'
import Flights from './screens/Flights'
import Hotels from './screens/Hotels'
import Restaurants from './screens/Restaurants'
import Activities from './screens/Activities'

function AppNav() {
  return (
    //we will need to create protected routes when we get authentication up
    //so that users wont be able to go to authenticated screens unless they're authenticated
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/Flights" element={<Flights />} />
      <Route path="/Hotels" element={<Hotels />} />
      <Route path="/Restaurants" element={<Restaurants />} />
      <Route path="/Activities" element={<Activities />} />
    </Routes>

  );
}

export default AppNav;


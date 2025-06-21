import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import AddBus from "./pages/AddBus";
import AvailableBuses from './pages/AvailableBuses';
import SelectSeats from './pages/SelectSeats';
import PassengerDetails from  "./pages/PassengerDetails";
import MyTickets from './pages/MyTickets';
import UserHome from "./pages/UserHome";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/addbus" element={<AddBus />} />
        <Route path="/available-buses" element={<AvailableBuses />} />
        <Route path="/select-seats" element={<SelectSeats />} />
        <Route path="/passenger-details" element={<PassengerDetails />} />
        <Route path="/my-tickets" element={<MyTickets />} />
        <Route path="/userhome" element={<UserHome />} />
      </Routes>
  );
}

export default App;



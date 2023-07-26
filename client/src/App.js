import React from "react";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";
import CardOrdering from "./pages/CardOrdering";
import TrackOrder from "./pages/TrackOrder";
import Profile from "./pages/Profile";
import OTASingUp from "./pages/OTASingUp";
import VerifyOTP from "./pages/VerifyOTP";

function App() {
  return (
    <Router>
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/signup" element={<SignUp />} />
        <Route path ="/otpsignup" element={<OTASingUp />} />
        <Route path ="/otpverify" element={<VerifyOTP />} />
        <Route path ="/signin" element={<SignIn />} />
        <Route path ="/restuarant" element={<Restaurant />} />
        <Route path ="/placingOrder" element={ <CardOrdering />} />
        <Route path ="/trackOrder" element={<TrackOrder />} />
        <Route path ="/payments" element={''} />
        <Route path ="/profile/*" element={<Profile/>} />
      </Routes>
    </Router>
  );
}

export default App;
  
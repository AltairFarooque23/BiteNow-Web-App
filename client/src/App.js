import React from "react";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";

function App() {
  return (
    <Router>
      <Routes>
        <Route path ="/" element={<Home/>} />
        <Route path ="/signup" element={<SignUp />} />
        <Route path ="/signin" element={<SignIn />} />
        <Route path ="/restuarant" element={<Restaurant />} />
        <Route path ="/cartOrdering" element={''} />
        <Route path ="/payments" element={''} />
        <Route path ="/trackOrder" element={''} />
        <Route path ="/profile/*" element={''} />
      </Routes>
    </Router>
  );
}

export default App;
  
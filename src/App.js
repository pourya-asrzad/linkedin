import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Profile from "./Components/Profile/Profile";
import Home from "./Components/Home/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/Profile" element={<Profile />} />
        <Route exact path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

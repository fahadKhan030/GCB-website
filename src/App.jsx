import React from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <div className="m-2">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;

import React from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <main className="mx-3 md:mx-5 lg:mx-7 mt-3" >
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default App;

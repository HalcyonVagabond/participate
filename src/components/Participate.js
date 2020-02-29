import React from "react"
import NavBar from "./nav/NavBar"
import MasterRouter from "./MasterRouter";
import Footer from "./nav/Footer"
import "./nav/NavBar.css"
import "./Participate.css"



const Participate = () => {
  return (
    <>
      <NavBar />
      <div id="MasterRouter">
        <MasterRouter />
        <Footer />
      </div>

    </>
  );
};

export default Participate;
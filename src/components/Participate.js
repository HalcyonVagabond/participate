import React from "react"
import NavBar from "./headerNav/NavBar"
import BodyRouter from "./BodyRouter";
import Footer from "./headerNav/Footer"
import "./headerNav/NavBar.css"
import "./Participate.css"



const Participate = () => {
  return (
    <>
    <div style={{position:'relative'}}>
      <NavBar />
      <div id="bodyWrapper">
        <BodyRouter />
      </div>
      <Footer />
    </div>
    </>
  );
};

export default Participate;
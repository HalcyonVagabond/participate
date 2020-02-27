import React from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews";
import "./nav/NavBar.css"
import "./Participate.css"


const Participate = () => {
  return (
    <>
      <NavBar />
      <div id="ApplicationViews">
        <ApplicationViews />
      </div>
    </>
  );
};

export default Participate;
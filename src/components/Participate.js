import React from "react"
import NavBar from "./headerNav/NavBar"
import BodyRouter from "./BodyRouter";
import Footer from "./headerNav/Footer"
import "./headerNav/NavBar.css"
import "./Participate.css"



const Participate = (props) => {
  return (
    <>
    <div style={{position:'relative'}}>
      <NavBar {...props}/>
      <div id="bodyWrapper">
        <BodyRouter {...props} style={{marginBottom: '20px'}}/>
      </div>
      <Footer {...props}/>
    </div>
    </>
  );
};

export default Participate;
import React, {useState} from "react"
import NavBar from "./headerNav/NavBar"
import BodyRouter from "./BodyRouter";
import Footer from "./headerNav/Footer"
import "./headerNav/NavBar.css"
import "./Participate.css"



const Participate = (props) => {
  const [ isLoggedIn, changeIsLoggedIn ] = useState(false)

  return (
    <>
    <div id="mainContainer" >
      <NavBar {...props} isLoggedIn={isLoggedIn} changeIsLoggedIn={changeIsLoggedIn} />
      <div id="bodyWrapper">
        <BodyRouter {...props} />
      </div>
      <div style={{position:'relative'}}>
      <Footer {...props}/>
      </div>
    </div>
    </>
  );
};

export default Participate;
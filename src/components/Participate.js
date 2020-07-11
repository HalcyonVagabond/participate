import React, {useState, useEffect} from "react"
import {useHistory} from "react-router-dom"
import NavBar from "./headerNav/NavBar"
import BodyRouter from "./BodyRouter";
import Footer from "./headerNav/Footer"
import DashboardSidebarMain from "./dashboardSidebar/DashboardSidebarMain"
import "./headerNav/NavBar.css"
import "./Participate.css"
import setColorGovLevel from "../modules/setColorsGovLevel"



const Participate = (props) => {
  const [ isLoggedIn, changeIsLoggedIn ] = useState(false)
  const [ govLevel, changeGovLevel ] = useState('city')
  const history = useHistory()

  const checkIfLoggedIn = () => {
    if (sessionStorage.getItem('userId') !== null){
      changeIsLoggedIn(true)
    } else {
      changeIsLoggedIn(false)
    }
  }

  window.addEventListener("storage", () => {
    sessionStorage.removeItem("userId");
      changeIsLoggedIn(false);
      history.push("/");
  });

  useEffect(()=>{
    setColorGovLevel(govLevel)
  }, [govLevel])

  useEffect(()=>{
    checkIfLoggedIn()
  }, [sessionStorage.getItem('user')])

  return (
    <>
    <div id="mainContainer" style={{position: 'relative'}}>
      <NavBar isLoggedIn={isLoggedIn} changeIsLoggedIn={changeIsLoggedIn} govLevel={govLevel} changeGovLevel={changeGovLevel}/>
      <DashboardSidebarMain isLoggedIn={isLoggedIn} govLevel={govLevel} changeGovLevel={changeGovLevel}/>
      <div id="bodyWrapper">
        <BodyRouter govLevel={govLevel} changeGovLevel={changeGovLevel} changeIsLoggedIn={changeIsLoggedIn}/>
      </div>
     
        <Footer govLevel={govLevel} changeGovLevel={changeGovLevel}/>
    </div>
    </>
  );
};

export default Participate;
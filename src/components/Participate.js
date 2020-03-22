import React, {useState, useEffect} from "react"
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



  useEffect(()=>{
    setColorGovLevel(govLevel)
  }, [govLevel])

  return (
    <>
    <div id="mainContainer" >
      <NavBar isLoggedIn={isLoggedIn} changeIsLoggedIn={changeIsLoggedIn} govLevel={govLevel} changeGovLevel={changeGovLevel}/>
      <DashboardSidebarMain setIsActiveUser={changeIsLoggedIn} govLevel={govLevel} changeGovLevel={changeGovLevel}/>
      <div id="bodyWrapper">
        <BodyRouter govLevel={govLevel} changeGovLevel={changeGovLevel}/>
      </div>
      <div style={{position:'relative'}}>
      <Footer govLevel={govLevel} changeGovLevel={changeGovLevel}/>
      </div>
    </div>
    </>
  );
};

export default Participate;
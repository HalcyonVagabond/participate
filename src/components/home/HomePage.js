import React from "react"
import { Router, Link } from "react-router-dom"
import { Jumbotron } from "reactstrap"
import US_FullMap from "../usaCountryMap/US_FullMap"
import WelcomeModal from "./welcomeMessage/WelcomeModal"
import "./HomePage.css"

const HomePage = (props) => {

    const welcomeMessageConditional = () => {
        const setActiveAnonymousUser = () => {
            return sessionStorage.setItem('anonymousUser', JSON.stringify({'activeAnonymousUser': true}));
          }

        if (sessionStorage.getItem('anonymousUser') === null && sessionStorage.getItem('user') === null) {
            return <WelcomeModal className="welcomeMessage" onClick={setActiveAnonymousUser} setActiveAnonymousUser={setActiveAnonymousUser}/>
        }
    }

    return (
        <>
            {welcomeMessageConditional()}
            <div className="mapContainer">
                <Jumbotron className="mapHeader"><h1>Search Governments</h1></Jumbotron>
                <US_FullMap {...props} />
            </div>
        </>
    )

}

export default HomePage;
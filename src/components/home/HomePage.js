import React from "react"
import { Router, Link } from "react-router-dom"
import US_FullMap from "../maps/US_CountryMap/US_FullMap"
import "./HomePage.css"

const HomePage = (props) => {

    return (
        <section className="mapContainer">
            <US_FullMap {...props}/>
        </section>
    )

}

export default HomePage;
import React from "react"
import { Router, Link } from "react-router-dom"
import US_FullMap from "../maps/US_CountryMap/US_FullMap"
import "./HomePage.css"

const HomePage = () => {

    return (
        <section class="mapContainer" id="homeContainer">
            <US_FullMap/>
        </section>
    )

}

export default HomePage;
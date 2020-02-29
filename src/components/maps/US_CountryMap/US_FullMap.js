import React from "react"
import { Jumbotron, Container } from "reactstrap"
import US_CountryMapCard from "./US_CountryMapCard"
import US_MapToolbar from "./US_MapToolbar"
import "./US_FullMap.css"

const US_FullMap = () => {

    return (
        <section className="fullMapContainer">
            <Jumbotron className="jumbo">
                {/* <Container fluid> */}
                    <US_MapToolbar />
                    <US_CountryMapCard />
                {/* </Container> */}
            </Jumbotron>
        </section>
    )


}

export default US_FullMap;
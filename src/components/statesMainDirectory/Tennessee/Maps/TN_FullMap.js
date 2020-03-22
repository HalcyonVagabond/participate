import React, { useState, useEffect } from "react"
import { Jumbotron } from "reactstrap"
import TN_mapWithCounties from "./TN_mapWithCounties"
import TN_FourCities from "./TN_FourCities"
import TN_FederalMap from "./TN_FederalMap"
import TN_MapToolbar from "./toolbar/TN_MapToolbar"
import "../../../mapTemplates/FullMap.css"


const TN_FullMap = ({routeToSelectedArea, govLevel, changeGovLevel}) => {

    const selectLevel = (event) => {
        const levelValue = event.target.value
        return changeGovLevel(levelValue)

    }

    const mapTypeConditional = () => {
        if (govLevel === 'city') {
            return <TN_FourCities routeToSelectedArea={routeToSelectedArea} />
        } else if (govLevel === 'county') {
            return <TN_mapWithCounties routeToSelectedArea={routeToSelectedArea} />
        } else if (govLevel === 'federal') {
            return <TN_FederalMap routeToSelectedArea={routeToSelectedArea} />
        } else {
            return <TN_mapWithCounties routeToSelectedArea={routeToSelectedArea} />
        }
    }
    

    return (
        <section className="fullMapContainer">
            <div className="mapContainer jumbo">
                <TN_MapToolbar selectLevel={selectLevel} govLevel={govLevel}/>
                {mapTypeConditional()} 
            </div>   
        </section>
    )


}

export default TN_FullMap;
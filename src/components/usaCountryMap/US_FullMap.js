import React, { useState, useEffect } from "react"
import { Jumbotron } from "reactstrap"
import US_CountryMapCard from "./US_CountryMapCard"
import US_MapToolbar from "./toolbar/US_MapToolbar"
import "../mapTemplates/FullMap.css"
import convertRegion from "../../modules/convertRegion"

const US_FullMap = (props) => {
    const [ stateSelected, chooseStateSelect] = useState('')


    const selectLevel = (event) => {
        const levelValue = event.target.value
        return props.changeGovLevel(levelValue)
    }

    const selectState = (event) => {
        if(event.target.id.length > 0 ) {
            const clickedState = convertRegion.convertForRoute(event.target.id, 'toName')
        return chooseStateSelect(clickedState)
        }

    }

    useEffect(()=>{
        if(stateSelected !== '') {
            props.routerProps.history.push(`/${stateSelected}`,props.govLevel)
        }
    },[stateSelected])

    return (
        <section className="fullMapContainer">
            <div className="mapContainer jumbo">
                <h2 className="mapHeader">Search Governments</h2>
                <US_MapToolbar selectLevel={selectLevel} chooseStateSelect={chooseStateSelect}/>
                <US_CountryMapCard selectState={selectState}/>
            </div>
        </section>
    )


}

export default US_FullMap;
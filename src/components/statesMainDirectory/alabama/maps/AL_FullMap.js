import React, { useState, useEffect } from "react"
import { Jumbotron } from "reactstrap"
import AL_CountiesMap from "./AL_CountiesMap"
import USCountryToolbar from "../../../usaCountryMap/toolbar/US_MapToolbar"


const AL_FullMap = (props) => {
    const [ govLevel, changeGovLevel ] = useState('city')
    const [ stateSelected, chooseStateSelect] = useState('')


    // const selectLevel = (event) => {
    //     const levelValue = event.target.value
    //     return changeGovLevel(levelValue)

    // }

    // const selectState = (event) => {
    //     const clickedState = convertRegion.convertForRoute(event.target.id, 'toName')
    //     return chooseStateSelect(clickedState)
    // }

    // useEffect(()=>{
    //     if(stateSelected !== '') {
    //         props.history.push(`/${stateSelected}`,govLevel)
    //     }
    // },[stateSelected])

    return (
        <section className="fullMapContainer">
            <div className="mapContainer jumbo">
                    <USCountryToolbar/>
                    <AL_CountiesMap />
            </div>
        </section>
    )


}

export default AL_FullMap;
import React, { useState, useEffect } from "react"
import { Jumbotron } from "reactstrap"
import TN_mapWithCounties from "./TN_mapWithCounties"
import USCountryToolbar from "../../../mapTemplates/Toolbars/USCountryToolbar/USCountryToolbar"
import "../../../usaCountryMap/US_FullMap.css"


const TN_FullMap = (props) => {
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
            <Jumbotron className="jumbo">
                    <USCountryToolbar/>
                    <TN_mapWithCounties />
            </Jumbotron>
        </section>
    )


}

export default TN_FullMap;
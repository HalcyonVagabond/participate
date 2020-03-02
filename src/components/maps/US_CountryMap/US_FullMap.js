import React, { useState, useEffect } from "react"
import { Jumbotron } from "reactstrap"
import US_CountryMapCard from "./US_CountryMapCard"
import US_MapToolbar from "./US_MapToolbar"
import "./US_FullMap.css"
import convertRegion from "../../../modules/convertRegion"

const US_FullMap = (props) => {
    const [ govLevel, changeGovLevel ] = useState('city')
    const [ stateSelected, chooseStateSelect] = useState('')


    const selectLevel = (event) => {
        const levelValue = event.target.value
        return changeGovLevel(levelValue)

    }

    const selectState = (event) => {
        const clickedState = convertRegion.convertForRoute(event.target.id, 'toName')
        return chooseStateSelect(clickedState)
    }

    useEffect(()=>{
        if(stateSelected !== '') {
            props.history.push(`/${stateSelected}`,govLevel)
        }
    },[stateSelected])

    return (
        <section className="fullMapContainer">
            <Jumbotron className="jumbo">
                    <US_MapToolbar selectLevel={selectLevel}/>
                    <US_CountryMapCard selectState={selectState}/>
            </Jumbotron>
        </section>
    )


}

export default US_FullMap;
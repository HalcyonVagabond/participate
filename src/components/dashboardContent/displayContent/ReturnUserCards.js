import React, {useState, useEffect} from "react"
import GovernmentOfficialCard from "./contentCards/GovernmentOfficialCard"

const ReturnProperCards = ({classObject}) => {
    

    function cardConditional () {
        if(classObject.className==='GovernmentOfficials'){
            console.log(`'Im here!' ${classObject.id}`)
            return <GovernmentOfficialCard key={classObject.id} govOfficialObj={classObject} />
        }
          
    }

    // useEffect(()=>{
    //     CreateCards()
    // }, [])
    // useState(()=>{
    //     returnUserCards()
    // }, [userCards])

    return (
        <>
            {cardConditional()}
        </>
    )
}

export default ReturnProperCards;
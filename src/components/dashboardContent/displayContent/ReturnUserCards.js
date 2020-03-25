import React from "react"
import GovernmentOfficialCard from "./contentCards/GovernmentOfficialCard"
import DepartmentCard from "./contentCards/DepartmentCard"
import CommitteeCard from "./contentCards/CommitteeCard"
import LegislationCard from "./contentCards/LegislationCard"
import EventCard from "./contentCards/EventCard"
import ElectionCard from "./contentCards/ElectionCard"
import ServiceCard from "./contentCards/ServiceCard"

const ReturnProperCards = ({classObject, setMadeChange}) => {
    

    function cardConditional () {
        if(classObject.className==='GovernmentOfficials'){
            return <GovernmentOfficialCard key={classObject.id} govOfficialObj={classObject} setMadeChange={setMadeChange}/>
        } else if (classObject.className==='Departments'){
            return <DepartmentCard key={classObject.id} departmentObj={classObject} setMadeChange={setMadeChange}/>
        } else if (classObject.className==='Committees'){
            return <CommitteeCard key={classObject.id} committeeObj={classObject} setMadeChange={setMadeChange}/>
        } else if (classObject.className==='Legislation'){
            return <LegislationCard key={classObject.id} legislationObj={classObject} setMadeChange={setMadeChange}/>
        } else if (classObject.className==='Events'){
            return <EventCard key={classObject.id} eventObj={classObject} setMadeChange={setMadeChange}/>
        } else if (classObject.className==='Elections'){
            return <ElectionCard key={classObject.id} electionObj={classObject} setMadeChange={setMadeChange}/>
        } else if (classObject.className==='Services'){
            return <ServiceCard key={classObject.id} serviceObj={classObject} setMadeChange={setMadeChange}/>
        }
          
    }

    return (
        <>
            {cardConditional()}
        </>
    )
}

export default ReturnProperCards;
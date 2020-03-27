import React, { useState, useEffect } from "react"
import { Header, Button, Input, Dropdown } from 'semantic-ui-react'

import dbAPI from "../../../../modules/dbAPI"

const ElectionForm = ({ govId, setMadeChange, setPopupOpen }) => {

    const activeUserId = sessionStorage.getItem('userId')
    const [electionInputs, setElectionsInputs] = useState({ "governmentId": govId, "userId": activeUserId })

    const handleFieldChange = (evt) => {
        const stateToChange = { ...electionInputs };
        stateToChange[evt.target.id] = evt.target.value;
        setElectionsInputs(stateToChange);

    };

    const handleDropDown = (event, data) => {
        const stateToChange = { ...electionInputs };
        stateToChange[data.id] = data.value;
        setElectionsInputs(stateToChange);
    }

    async function submitElection() {
        await dbAPI.createNewObjectByClassName('Elections', electionInputs)
            .then(()=>{
                setPopupOpen(false)
                setMadeChange(true)
            })
    }

    return (
        <>
            <Header>Add Election</Header>
                <Input
                    id='name'
                    placeholder='Name'
                    onChange={handleFieldChange}
                />
                <Input
                    id='date'
                    type='date'
                    placeholder='Date'
                    onChange={handleDropDown}
                />
                <Input
                    id='votingLocation'
                    placeholder='Voting Location'
                    onChange={handleFieldChange}
                /> 
                <Button onClick={submitElection}>Create</Button>
        </>

    );
};

export default ElectionForm;

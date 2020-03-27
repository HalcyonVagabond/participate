import React, { useState, useEffect } from "react"
import { Header, Button, Input, Dropdown } from 'semantic-ui-react'

import dbAPI from "../../../../modules/dbAPI"

const GovernmentOfficialForm = ({ govId, setMadeChange, setPopupOpen }) => {

    const activeUserId = sessionStorage.getItem('userId')
    const [officialInputs, setOfficialInputs] = useState({ "governmentId": govId, "userId": activeUserId })

    const handleFieldChange = (evt) => {
        const stateToChange = { ...officialInputs };
        stateToChange[evt.target.id] = evt.target.value;
        setOfficialInputs(stateToChange);

    };

    const handleDropDown = (event, data) => {
        const stateToChange = { ...officialInputs };
        stateToChange[data.id] = data.value;
        setOfficialInputs(stateToChange);
    }

    async function submitOfficial() {
        setPopupOpen(false)
        console.log(officialInputs)
        await dbAPI.createNewObjectByClassName('GovernmentOfficials', officialInputs)
            .then(()=>{
                setPopupOpen(false)
                setMadeChange(true)
            })
    }

    return (
        <>
            <Header>Government Official</Header>
                <Input
                    id='firstName'
                    placeholder='First Name'
                    onChange={handleFieldChange}
                />
                <Input
                    id='lastName'
                    placeholder='Last name'
                    onChange={handleFieldChange}
                />
                <Input
                    id='position'
                    placeholder='Position'
                    onChange={handleFieldChange}
                />
                <Input
                    id='department'
                    placeholder='Department'
                    onChange={handleFieldChange}
                />
                <Input
                    id='phoneNumber'
                    placeholder='Phone Number'
                    onChange={handleFieldChange}
                />
                <Input
                    id='email'
                    placeholder='email'
                    onChange={handleFieldChange}
                />
                <Input
                    id='address'
                    placeholder='Address'
                    onChange={handleFieldChange}
                />
                <Dropdown
                    id='isElected'
                    placeholder='Elected?'
                    selection
                    options={[{value: true, text: 'Yes'}, {value: false, text: 'No'}]}
                    onChange={handleDropDown}
                />
                {/* <Input
                    id='notes'
                    placeholder='Notes'
                    onChange={handleFieldChange}
                /> */}
                <Button onClick={submitOfficial}>Create</Button>
        </>

    );
};

export default GovernmentOfficialForm;

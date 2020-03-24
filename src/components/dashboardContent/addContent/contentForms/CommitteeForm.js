import React, { useState, useEffect } from "react"
import { Header, Button, Input, TextArea } from 'semantic-ui-react'

import dbAPI from "../../../../modules/dbAPI"

const CommitteeForm = ({ govId, setMadeChange, setPopupOpen }) => {

    const activeUserId = sessionStorage.getItem('userId')
    const [committeeInputs, setCommitteeInputs] = useState({ "governmentId": govId, "userId": activeUserId })

    const handleFieldChange = (evt) => {
        const stateToChange = { ...committeeInputs };
        stateToChange[evt.target.id] = evt.target.value;
        setCommitteeInputs(stateToChange);
    };


    async function submitCommittee() {
        await dbAPI.createNewObjectByClassName('Committees', committeeInputs)
            .then(()=>{
                setPopupOpen(false)
                setMadeChange(true)
            })
    }

    return (
        <>
            <Header>Add Committee</Header>
                <Input
                    id='name'
                    placeholder='Name'
                    onChange={handleFieldChange}
                />
                <Input
                    id='branch'
                    placeholder='Branch'
                    onChange={handleFieldChange}
                />
                <Input
                    id='phoneNumber'
                    placeholder='Phone Number'
                    onChange={handleFieldChange}
                />
                <Input
                    id='email'
                    placeholder='Email'
                    onChange={handleFieldChange}
                />
                <Input
                    id='address'
                    placeholder='Address'
                    onChange={handleFieldChange}
                />
                <TextArea
                    id='notes'
                    placeholder='Notes'
                    onChange={handleFieldChange}
                />

                <Button onClick={submitCommittee}>Create</Button>
        </>

    );
};

export default CommitteeForm;

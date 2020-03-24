import React, { useState, useEffect } from "react"
import { Header, Button, Input, TextArea } from 'semantic-ui-react'

import dbAPI from "../../../../modules/dbAPI"

const ServicesForm = ({ govId, setMadeChange, setPopupOpen }) => {

    const activeUserId = sessionStorage.getItem('userId')
    const [serviceInputs, setServiceInputs] = useState({ "governmentId": govId, "userId": activeUserId })

    const handleFieldChange = (evt) => {
        const stateToChange = { ...serviceInputs };
        stateToChange[evt.target.id] = evt.target.value;
        setServiceInputs(stateToChange);
    };


    async function submitService() {
        await dbAPI.createNewObjectByClassName('Services', serviceInputs)
            .then(()=>{
                setPopupOpen(false)
                setMadeChange(true)
            })
    }

    return (
        <>
            <Header>Add Government Service</Header>
                <Input
                    id='name'
                    placeholder='Name'
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
                <Button onClick={submitService}>Create</Button>
        </>

    );
};

export default ServicesForm;
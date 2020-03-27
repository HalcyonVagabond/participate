import React, { useState, useEffect } from "react"
import { Header, Button, Input, TextArea } from 'semantic-ui-react'
import dbAPI from "../../../../modules/dbAPI"
import { Label } from "reactstrap";

const EventForm = ({ govId, setMadeChange, setPopupOpen }) => {

    const activeUserId = sessionStorage.getItem('userId')
    const [eventInputs, setEventInputs] = useState({ "governmentId": govId, "userId": activeUserId })

    const handleFieldChange = (evt) => {
        const stateToChange = { ...eventInputs };
        stateToChange[evt.target.id] = evt.target.value;
        setEventInputs(stateToChange);

    };

    async function submitEvent() {
        await dbAPI.createNewObjectByClassName('Events', eventInputs)
            .then(()=>{
                setPopupOpen(false)
                setMadeChange(true)
            })
    }

    return (
        <>
            <Header>Add Event</Header>
                <Input
                    id='title'
                    placeholder='Title'
                    onChange={handleFieldChange}
                />
                <Input
                    id='address'
                    placeholder='Address'
                    onChange={handleFieldChange}
                />
                <Label for='dateTime'>When is it?</Label>
                <input
                    id='dateTime'
                    type='datetime-local'
                    onChange={handleFieldChange}
                />
                <TextArea
                    id='notes'
                    placeholder='Notes'
                    onChange={handleFieldChange}
                />
                <Button onClick={submitEvent}>Create</Button>
        </>

    );
};

export default EventForm;

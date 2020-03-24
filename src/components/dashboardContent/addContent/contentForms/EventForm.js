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

    const handleDropDown = (event, data) => {
        const stateToChange = { ...eventInputs };
        stateToChange[data.id] = data.value;
        setEventInputs(stateToChange);
    }

    async function submitOfficial() {
        await dbAPI.createNewObjectByClassName('Events', eventInputs)
            .then(()=>{
                setPopupOpen(false)
                setMadeChange(true)
            })
    }

    return (
        <>
            <Header>Add Committee</Header>
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
                <Button onClick={submitOfficial}>Create</Button>
        </>

    );
};

export default EventForm;

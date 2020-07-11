import React, { useState, useEffect } from "react"
import { Header, Button, Input, Dropdown, TextArea } from 'semantic-ui-react'
// import SemanticDatePicker from 'react-semantic-ui-datepickers'

import dbAPI from "../../../../modules/dbAPI"
import { Label } from "reactstrap";

const LegislationForm = ({ govId, setMadeChange, setPopupOpen }) => {

    const activeUserId = sessionStorage.getItem('userId')
    const [legislationInputs, setLegislationInputs] = useState({ "title": "", "description": "", "isPassed": false, "governmentId": govId, "userId": activeUserId })

    const handleFieldChange = (evt) => {
        const stateToChange = { ...legislationInputs };
        stateToChange[evt.target.id] = evt.target.value;
        setLegislationInputs(stateToChange);
    };

    const handleDropDown = (event, data) => {
        const stateToChange = { ...legislationInputs };
        stateToChange[data.id] = data.value;
        setLegislationInputs(stateToChange);
    }

    const voteConditional = () => {
        if (legislationInputs.votedOn === true) {
            return (
                <>
                <Dropdown
                    id='isPassed'
                    placeholder='Has it been passed?'
                    selection
                    options={[{value: true, text: 'Yes'}, {value: false, text: 'No'}]}
                    onChange={handleDropDown}
                />
                <Label for='voteDate'>VoteDate</Label>
                <Input id='voteDate' type='date' onChange={handleDropDown}/>
                </>
            )
        } else if (legislationInputs.votedOn === false) {
            return (
                <>
                    <Label for='voteDate'>VoteDate</Label>
                    <Input id='voteDate' type='date' onChange={handleDropDown}/>
                </>
            )
        } else {
            return null
        }
    }

    async function submitOfficial() {
        await dbAPI.createNewObjectByClassName('Legislation', legislationInputs)
            .then(()=>{
                setPopupOpen(false)
                setMadeChange(true)
            })
    }

    return (
        <>
            <Header>Add Legislation</Header>
                <Input
                    id='title'
                    placeholder='Title'
                    onChange={handleFieldChange}
                />
                <TextArea 
                    id='description'
                    placeholder='Description'
                    onChange={handleFieldChange}
                />
                <Input
                    id='branch'
                    placeholder='Branch'
                    onChange={handleFieldChange}
                />
                <Dropdown
                    id='votedOn'
                    placeholder='Has it been voted on?'
                    selection
                    options={[{value: true, text: 'Yes'}, {value: false, text: 'No'}]}
                    onChange={handleDropDown}
                />
                {voteConditional()}
                <Input
                    id='contactInfo'
                    placeholder='Contact Info'
                    onChange={handleFieldChange}
                />
                <Button onClick={submitOfficial}>Create</Button>
        </>

    );
};

export default LegislationForm;

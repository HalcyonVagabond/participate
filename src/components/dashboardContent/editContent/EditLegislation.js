import React, { useState, useEffect } from "react"
import { Header, Button, Input, TextArea, Modal, Dropdown } from 'semantic-ui-react'
import { Label } from "reactstrap";


import dbAPI from "../../../modules/dbAPI"

const EditLegislation = ({ legislationObj, setMadeChange }) => {

    const activeUserId = sessionStorage.getItem('userId')
    const [legislationInputs, setLegislationInputs] = useState(legislationObj.attributes)
    const [ isModalOpen, setIsModalOpen ] = useState(false)

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


    async function saveEditedLegislation() {
        await dbAPI.saveEditedObjectByClassNameAndObjId('Legislation', legislationObj.id, legislationInputs)
            .then(()=>{
                setIsModalOpen(false)
                setMadeChange(true)
            })
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
                    value={legislationInputs.isPassed}
                />
                <Label for='voteDate'>VoteDate</Label>
                <Input id='voteDate' type='date' onChange={handleDropDown} value={legislationInputs.voteDate}/>
                </>
            )
        } else if (legislationInputs.votedOn === false) {
            return (
                <>
                    <Label for='voteDate'>VoteDate</Label>
                    <Input id='voteDate' type='date' onChange={handleDropDown} value={legislationInputs.voteDate}/>
                </>
            )
        } else {
            return null
        }
    }


    return (
        <Modal
        className='editContentModalContainer'
        trigger={<Button onClick={()=>setIsModalOpen(true)}>Edit</Button>}
        open={isModalOpen}
        onClose={()=>{setIsModalOpen(false)}}
        // centered={true}
        size='small'
        closeIcon
        >
            <Modal.Content className="editContentModal">
            <Header className='editFormHeader' >Edit Legislation</Header>
                <Input
                    id='title'
                    placeholder='Title'
                    onChange={handleFieldChange}
                    value={legislationInputs.title}
                />
                <TextArea 
                    id='description'
                    placeholder='Description'
                    onChange={handleFieldChange}
                    value={legislationInputs.description}
                />
                <Input
                    id='branch'
                    placeholder='Branch'
                    onChange={handleFieldChange}
                    value={legislationInputs.branch}
                />
                <Dropdown
                    id='votedOn'
                    placeholder='Has it been voted on?'
                    selection
                    options={[{value: true, text: 'Yes'}, {value: false, text: 'No'}]}
                    onChange={handleDropDown}
                    value={legislationInputs.votedOn}
                />
                {voteConditional()}
                <Input
                    id='contactInfo'
                    placeholder='Contact Info'
                    onChange={handleFieldChange}
                    value={legislationInputs.contactInfo}
                />
                <Button onClick={saveEditedLegislation}>Save</Button>
                </Modal.Content>
        </Modal>

    );
};

export default EditLegislation;
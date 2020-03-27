import React, { useState, useEffect } from "react"
import { Header, Button, Input, Modal } from 'semantic-ui-react'

import dbAPI from "../../../modules/dbAPI"

const EditElection = ({ electionObj, setMadeChange }) => {

    const activeUserId = sessionStorage.getItem('userId')
    const [electionInputs, setElectionInputs] = useState(electionObj.attributes)
    const [ isModalOpen, setIsModalOpen ] = useState(false)

    const handleFieldChange = (evt) => {
        const stateToChange = { ...electionInputs };
        stateToChange[evt.target.id] = evt.target.value;
        setElectionInputs(stateToChange);
    };

    const handleDropDown = (event, data) => {
        const stateToChange = { ...electionInputs };
        stateToChange[data.id] = data.value;
        setElectionInputs(stateToChange);
    }

    async function saveEditedElection() {
        await dbAPI.saveEditedObjectByClassNameAndObjId('Elections', electionObj.id, electionInputs)
            .then(()=>{
                setIsModalOpen(false)
                setMadeChange(true)
            })
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
            <Header className='editFormHeader' >Edit {electionInputs.name}</Header>
            <Input
                    id='name'
                    placeholder='Name'
                    onChange={handleFieldChange}
                    value={electionInputs.name}
                />
                <Input
                    id='date'
                    type='date'
                    placeholder='Date'
                    onChange={handleDropDown}
                    value={electionInputs.date}
                />
                <Input
                    id='votingLocation'
                    placeholder='Voting Location'
                    onChange={handleFieldChange}
                    value={electionInputs.votingLocation}
                /> 
                <Button onClick={saveEditedElection}>Save</Button>
                </Modal.Content>
        </Modal>

    );
};

export default EditElection;
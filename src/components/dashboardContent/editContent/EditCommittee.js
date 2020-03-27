import React, { useState, useEffect } from "react"
import { Header, Button, Input, TextArea, Modal } from 'semantic-ui-react'

import dbAPI from "../../../modules/dbAPI"

const EditCommittee = ({ committeeObj, setMadeChange }) => {

    const activeUserId = sessionStorage.getItem('userId')
    const [committeeInputs, setCommitteeInputs] = useState(committeeObj.attributes)
    const [ isModalOpen, setIsModalOpen ] = useState(false)

    const handleFieldChange = (evt) => {
        const stateToChange = { ...committeeInputs };
        stateToChange[evt.target.id] = evt.target.value;
        setCommitteeInputs(stateToChange);
    };



    async function saveEditedCommittee() {
        await dbAPI.saveEditedObjectByClassNameAndObjId('Committees', committeeObj.id, committeeInputs)
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
            <Header className='editFormHeader' >Edit {committeeInputs.name}</Header>
                <Input
                    id='name'
                    placeholder='Name'
                    onChange={handleFieldChange}
                    value={committeeInputs.name}
                />
                <Input
                    id='branch'
                    placeholder='Branch'
                    onChange={handleFieldChange}
                    value={committeeInputs.branch}
                />
                <Input
                    id='phoneNumber'
                    placeholder='Phone Number'
                    onChange={handleFieldChange}
                    value={committeeInputs.phoneNumber}
                />
                <Input
                    id='email'
                    placeholder='Email'
                    onChange={handleFieldChange}
                    value={committeeInputs.email}
                />
                <Input
                    id='address'
                    placeholder='Address'
                    onChange={handleFieldChange}
                    value={committeeInputs.address}
                    
                />
                <TextArea
                    id='notes'
                    placeholder='Notes'
                    onChange={handleFieldChange}
                    value={committeeInputs.notes}
                />

                <Button onClick={saveEditedCommittee}>Save Changes</Button>
                </Modal.Content>
        </Modal>

    );
};

export default EditCommittee;
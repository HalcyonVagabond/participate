import React, { useState, useEffect } from "react"
import { Header, Button, Input, Dropdown, Modal } from 'semantic-ui-react'

import dbAPI from "../../../modules/dbAPI"

const EditGovOfficial = ({ govOfficialObj, setMadeChange }) => {

    const activeUserId = sessionStorage.getItem('userId')
    const [govOfficialInputs, setGovOfficialInputs] = useState(govOfficialObj.attributes)
    const [ isModalOpen, setIsModalOpen ] = useState(false)

    const handleFieldChange = (evt) => {
        const stateToChange = { ...govOfficialInputs };
        stateToChange[evt.target.id] = evt.target.value;
        setGovOfficialInputs(stateToChange);
    };

    const handleDropDown = (event, data) => {
        const stateToChange = { ...govOfficialInputs };
        stateToChange[data.id] = data.value;
        setGovOfficialInputs(stateToChange);
    }

    async function saveEditedGovOfficial() {
        await dbAPI.saveEditedObjectByClassNameAndObjId('GovernmentOfficials', govOfficialObj.id, govOfficialInputs)
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
            <Header className='editFormHeader' >Edit Government Official</Header>
                <Input
                    id='firstName'
                    placeholder='First Name'
                    onChange={handleFieldChange}
                    value={govOfficialInputs.firstName}
                />
                <Input
                    id='lastName'
                    placeholder='Last name'
                    onChange={handleFieldChange}
                    value={govOfficialInputs.lastName}
                />
                <Input
                    id='position'
                    placeholder='Position'
                    onChange={handleFieldChange}
                    value={govOfficialInputs.position}
                />
                <Input
                    id='department'
                    placeholder='Department'
                    onChange={handleFieldChange}
                    value={govOfficialInputs.department}
                />
                <Input
                    id='phoneNumber'
                    placeholder='Phone Number'
                    onChange={handleFieldChange}
                    value={govOfficialInputs.phoneNumber}
                />
                <Input
                    id='email'
                    placeholder='email'
                    onChange={handleFieldChange}
                    value={govOfficialInputs.email}
                />
                <Input
                    id='address'
                    placeholder='Address'
                    onChange={handleFieldChange}
                    value={govOfficialInputs.address}
                />
                <Dropdown
                    id='isElected'
                    placeholder='Elected?'
                    selection
                    options={[{value: true, text: 'Yes'}, {value: false, text: 'No'}]}
                    onChange={handleDropDown}
                    value={govOfficialInputs.isElected}
                />
                {/* <Input
                    id='notes'
                    placeholder='Notes'
                    onChange={handleFieldChange}
                /> */}
                <Button onClick={saveEditedGovOfficial}>Save</Button>
                </Modal.Content>
        </Modal>

    );
};

export default EditGovOfficial;
import React, { useState, useEffect } from "react"
import { Header, Button, Input, TextArea, Modal } from 'semantic-ui-react'

import dbAPI from "../../../modules/dbAPI"

const EditServices = ({ serviceObj, setMadeChange }) => {

    const activeUserId = sessionStorage.getItem('userId')
    const [serviceInputs, setServiceInputs] = useState(serviceObj.attributes)
    const [ isModalOpen, setIsModalOpen ] = useState(false)

    const handleFieldChange = (evt) => {
        const stateToChange = { ...serviceInputs };
        stateToChange[evt.target.id] = evt.target.value;
        setServiceInputs(stateToChange);
    };

    async function saveEditedService() {
        await dbAPI.saveEditedObjectByClassNameAndObjId('Services', serviceObj.id, serviceInputs)
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
            <Header className='editFormHeader' >Edit {serviceInputs.name}</Header>
            <Input
                    id='name'
                    placeholder='Name'
                    onChange={handleFieldChange}
                    value={serviceInputs.name}
                />
                <Input
                    id='phoneNumber'
                    placeholder='Phone Number'
                    onChange={handleFieldChange}
                    value={serviceInputs.phoneNumber}
                />
                <Input
                    id='email'
                    placeholder='Email'
                    onChange={handleFieldChange}
                    value={serviceInputs.email}
                />
                <Input
                    id='address'
                    placeholder='Address'
                    onChange={handleFieldChange}
                    value={serviceInputs.address}
                />
                <TextArea
                    id='notes'
                    placeholder='Notes'
                    onChange={handleFieldChange}
                    value={serviceInputs.notes}
                />
                <Button onClick={saveEditedService}>Save</Button>
                </Modal.Content>
        </Modal>

    );
};

export default EditServices;
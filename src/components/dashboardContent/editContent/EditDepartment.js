import React, { useState, useEffect } from "react"
import { Header, Button, Input, TextArea, Modal } from 'semantic-ui-react'

import dbAPI from "../../../modules/dbAPI"

const EditDepartment = ({ departmentObj, setMadeChange }) => {

    const activeUserId = sessionStorage.getItem('userId')
    const [departmentInputs, setDepartmentInputs] = useState(departmentObj.attributes)
    const [ isModalOpen, setIsModalOpen ] = useState(false)

    const handleFieldChange = (evt) => {
        const stateToChange = { ...departmentInputs };
        stateToChange[evt.target.id] = evt.target.value;
        setDepartmentInputs(stateToChange);
    };



    async function saveEditedDepartment() {
        await dbAPI.saveEditedObjectByClassNameAndObjId('Departments', departmentObj.id, departmentInputs)
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
                <Header className='editFormHeader' >Edit {departmentInputs.name}</Header>
                <Input
                    id='name'
                    placeholder='Name'
                    onChange={handleFieldChange}
                    value={departmentInputs.name}
                />
                <Input
                    id='branch'
                    placeholder='Branch'
                    onChange={handleFieldChange}
                    value={departmentInputs.branch}
                />
                <Input
                    id='phoneNumber'
                    placeholder='Phone Number'
                    onChange={handleFieldChange}
                    value={departmentInputs.phoneNumber}
                />
                <Input
                    id='email'
                    placeholder='Email'
                    onChange={handleFieldChange}
                    value={departmentInputs.email}
                />
                <Input
                    id='address'
                    placeholder='Address'
                    onChange={handleFieldChange}
                    value={departmentInputs.address}
                />
                <TextArea
                    id='notes'
                    placeholder='Notes'
                    onChange={handleFieldChange}
                    value={departmentInputs.notes}
                />
        
                <Button onClick={saveEditedDepartment}>Save</Button>
                </Modal.Content>
        </Modal>

    );
};

export default EditDepartment;

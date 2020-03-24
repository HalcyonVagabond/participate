import React, { useState, useEffect } from "react"
import { Header, Button, Input, TextArea } from 'semantic-ui-react'

import dbAPI from "../../../../modules/dbAPI"

const DepartmentForm = ({ govId, setMadeChange, setPopupOpen }) => {

    const activeUserId = sessionStorage.getItem('userId')
    const [departmentInputs, setDepartmentsInputs] = useState({ "governmentId": govId, "userId": activeUserId })

    const handleFieldChange = (evt) => {
        const stateToChange = { ...departmentInputs };
        stateToChange[evt.target.id] = evt.target.value;
        setDepartmentsInputs(stateToChange);
    };


    async function submitDepartment() {
        await dbAPI.createNewObjectByClassName('Departments', departmentInputs)
            .then(()=>{
                setPopupOpen(false)
                setMadeChange(true)
            })
    }

    return (
        <>
            <Header>Add Department</Header>
                <Input
                    id='name'
                    placeholder='Name'
                    onChange={handleFieldChange}
                />
                <Input
                    id='branch'
                    placeholder='Branch'
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
            <div className="">
                <Button onClick={submitDepartment}>Create</Button>
            </div>
        </>

    );
};

export default DepartmentForm;

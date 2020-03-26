import React, { useState, useEffect } from "react"
import { Button, Popup, Icon, Dropdown, Label } from 'semantic-ui-react'
import dbAPI from "../../../modules/dbAPI"
import GovOfficialForm from "./contentForms/GovOfficialForm"
import DepartmentForm from "./contentForms/DepartmentForm"
import CommitteeForm from "./contentForms/CommitteeForm"
import LegislationForm from "./contentForms/LegislationForm"
import EventForm from "./contentForms/EventForm"
import ElectionForm from "./contentForms/ElectionForm"
import ServicesForm from "./contentForms/ServiceForm"

const ContentFormConditional = ({ govId, setMadeChange }) => {

    const activeUserId = sessionStorage.getItem('userId')

    const [formByClassName, setSelectedFormByClassName] = useState()
    const [isPopupOpen, setPopupOpen ] = useState(false)

    const formClassNames = [{ value: 'GovernmentOfficials', text: 'Government Officials' }, { value: 'Departments', text: 'Departments' }, { value: 'Committees', text: 'Committees' }, { value: 'Events', text: 'Events' }, { value: 'Legislation', text: 'Legislation' }, { value: 'Elections', text: 'Elections' }, { value: 'Services', text: 'Services' }]

    const handleFormSelectDropdown = (event, data) => {
        setSelectedFormByClassName(data.value)
    }

    const returnSelectedForm = () => {
        if (formByClassName === 'GovernmentOfficials'){
            return <GovOfficialForm govId={govId} setMadeChange={setMadeChange} setPopupOpen={setPopupOpen}/>
        } else if (formByClassName === 'Departments'){
            return <DepartmentForm govId={govId} setMadeChange={setMadeChange} setPopupOpen={setPopupOpen}/>
        } else if (formByClassName === 'Committees'){
            return <CommitteeForm govId={govId} setMadeChange={setMadeChange} setPopupOpen={setPopupOpen}/>
        } else if (formByClassName === 'Legislation'){
            return <LegislationForm govId={govId} setMadeChange={setMadeChange} setPopupOpen={setPopupOpen}/>
        } else if (formByClassName === 'Events'){
            return <EventForm govId={govId} setMadeChange={setMadeChange} setPopupOpen={setPopupOpen}/>
        } else if (formByClassName === 'Elections'){
            return <ElectionForm govId={govId} setMadeChange={setMadeChange} setPopupOpen={setPopupOpen}/>
        } else if (formByClassName === 'Services'){
            return <ServicesForm govId={govId} setMadeChange={setMadeChange} setPopupOpen={setPopupOpen}/>
        } else {
            return <p>Choose which content to add!</p>
        };
    }

    return (
        <div>
            <Label style={{width: '100px'}} >Add Content</Label>
            <Dropdown
                className='createContent'
                labeled={true}
                placeholder='Select Info Type'
                selection
                style={{width: '20%'}}
                options={formClassNames}
                onChange={handleFormSelectDropdown}
            />
                <Popup
                    trigger={<Icon className='addContentIcon' name='plus' />}
                    on='click'
                    open={isPopupOpen}
                    onClose={()=>setPopupOpen(false)}
                    onOpen={()=>setPopupOpen(true)}
                >
                    {returnSelectedForm()}
                </Popup>
        </div>
    );
};

export default ContentFormConditional;

import React, { useState, useEffect } from "react"
import { Button, Popup, Icon, Dropdown, Label } from 'semantic-ui-react'
import dbAPI from "../../../../modules/dbAPI"
import GovOfficialForm from "../../../dashboardContent/addContent/contentForms/GovOfficialForm"
import DepartmentForm from "../../../dashboardContent/addContent/contentForms/DepartmentForm"
import CommitteeForm from "../../../dashboardContent/addContent/contentForms/CommitteeForm"
import LegislationForm from "../../../dashboardContent/addContent/contentForms/LegislationForm"
import EventForm from "../../../dashboardContent/addContent/contentForms/EventForm"
import ElectionForm from "../../../dashboardContent/addContent/contentForms/ElectionForm"
import NoteForm from "../../../dashboardContent/addContent/contentForms/NoteForm"
import ServicesForm from "../../../dashboardContent/addContent/contentForms/ServiceForm"

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
        <>
            <Label>Add Content
            
            <Popup
                    trigger={<Icon className='addContentIcon' name='plus'></Icon>}
                    on='click'
                    open={isPopupOpen}
                    onClose={()=>setPopupOpen(false)}
                    onOpen={()=>setPopupOpen(true)}
                >
                    {returnSelectedForm()}
                </Popup>
                </Label>
            <Dropdown
                className='createContent'
                labeled={true}
                placeholder='Select Info Type'
                selection
                options={formClassNames}
                onChange={handleFormSelectDropdown}
            />
        </>
    );
};

export default ContentFormConditional;

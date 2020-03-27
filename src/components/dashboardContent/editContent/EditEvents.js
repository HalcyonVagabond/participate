import React, { useState, useEffect } from "react"
import { Header, Button, Input, TextArea, Modal } from 'semantic-ui-react'
import {Label} from "reactstrap"
import dbAPI from "../../../modules/dbAPI"

const EditEvents = ({ eventObj, setMadeChange }) => {

    const activeUserId = sessionStorage.getItem('userId')
    const [eventInputs, setEventInputs] = useState(eventObj.attributes)
    const [ isModalOpen, setIsModalOpen ] = useState(false)

    const handleFieldChange = (evt) => {
        const stateToChange = { ...eventInputs };
        stateToChange[evt.target.id] = evt.target.value;
        setEventInputs(stateToChange);
    };

    async function saveEditedEvent() {
        await dbAPI.saveEditedObjectByClassNameAndObjId('Events', eventObj.id, eventInputs)
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
            <Header className='editFormHeader' >Edit {eventInputs.title}</Header>
            <Input
                    id='title'
                    placeholder='Title'
                    onChange={handleFieldChange}
                    value={eventInputs.title}
                />
                <Input
                    id='address'
                    placeholder='Address'
                    onChange={handleFieldChange}
                    value={eventInputs.address}
                />
                <Label for='dateTime'>When is it?</Label>
                <input
                    id='dateTime'
                    type='datetime-local'
                    onChange={handleFieldChange}
                    value={eventInputs.dateTime}
                />
                <TextArea
                    id='notes'
                    placeholder='Notes'
                    onChange={handleFieldChange}
                    value={eventInputs.notes}
                />
                <Button onClick={saveEditedEvent}>Save</Button>
                </Modal.Content>
        </Modal>

    );
};

export default EditEvents;

import React, {useState, useEffect} from "react"
import { Button, Modal, Form, Input } from 'semantic-ui-react'

const GovernmentOfficialForm = (props) => {

    const [inputs, setInputs] = useState()

    const handleFieldChange = (evt) => {
        const stateToChange = { ...inputs };
        stateToChange[evt.target.id] = evt.target.value;
        setInputs(stateToChange);

        if(evt.key === 'Enter'){
            // handleLogin()
        }
      };

    return (
                <Form>
                    <Form.Header>Elected Official</Form.Header>
                    <Form.Group widths='equal'>
                        <Form.Field
                            id='name'
                            control={Input}
                            label='Name'
                            placeholder='Name'
                            onChange={handleFieldChange}
                        />
                        <Form.Field
                            id='last_name'
                            control={Input}
                            label='Last name'
                            placeholder='Last name'
                            onChange={handleFieldChange}
                        />
                    </Form.Group>
                    <Form.Field
                            id='username'
                            control={Input}
                            label='Username'
                            placeholder='Username'
                            onChange={handleFieldChange}
                        />
                    <Form.Field
                        id='email'
                        control={Input}
                        label='Email'
                        placeholder='email'
                        onChange={handleFieldChange}
                    />
                    <Form.Field>
                        <label>Enter Password</label>
                        <Input id="password_1" type='password' onChange={handleFieldChange}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Renter Password</label>
                        <Input id="password_2" type='password' onChange={props.handleConfirmedPassword} />
                    </Form.Field>
                    <Form.Field>
                        <label>Image Url</label>
                        <Input id="image" onChange={handleFieldChange} placeholder='image url here'/>
                    </Form.Field>
                </Form>
                <div className="login-form=buttons">
                <Button onClick={props.handleSignup}>Create Account</Button>
                <Button onClick={props.toggleModal}>Cancel</Button>
                </div>
            </Modal.Content >
        </Modal>
    );
};

export default GovernmentOfficialForm;

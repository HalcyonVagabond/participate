import React, { useState } from 'react';
import {  ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Button } from "reactstrap"
import dbAPI from "../../../modules/dbAPI"


const LoginForm = ({toggle, changeIsLoggedIn}) => {

    const [credentials, setCredentials] = useState({ });

  // Update state whenever an input field is edited
    const handleFieldChange = (evt) => {
        const stateToChange = { ...credentials };
        stateToChange[evt.target.id.split('-')[0]] = evt.target.value;
        setCredentials(stateToChange);
    };

    async function handleLogin(e) {
        e.preventDefault();
        toggle()
        // sessionStorage.clear()
        // sessionStorage.setItem(
        //   'user',
        //   JSON.stringify(credentials)
        // );
        await dbAPI.loginUser(credentials)
          .then(()=>changeIsLoggedIn(true))
        // props.history.push('/')
      };


    return (
        <>
        <ModalHeader toggle={toggle}>Login to Participate</ModalHeader>
            <ModalBody>
              <Form onSubmit={handleLogin}>
                <FormGroup>
                  {/* <Label for="email">Email</Label> */}
                  <Input onChange={handleFieldChange} type="username" id="username-login" placeholder="username" />
                </FormGroup>
                <FormGroup>
                  {/* <Label for="favoriteColor">Favorite Color</Label> */}
                  <Input onChange={handleFieldChange} type="password" id="password-login" placeholder="favorite color" />
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" type="submit" onClick={handleLogin}>Login</Button>
            </ModalFooter>
        </>
    );

};

export default LoginForm;
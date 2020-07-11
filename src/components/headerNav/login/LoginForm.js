import React, { useState } from 'react';
import {  ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Button } from "reactstrap"
import dbAPI from "../../../modules/dbAPI"


const LoginForm = ({toggleLoginModal, changeIsLoggedIn}) => {

    const [credentials, setCredentials] = useState({ });

  // Update state whenever an input field is edited
    const handleFieldChange = (evt) => {
        const stateToChange = { ...credentials };
        stateToChange[evt.target.id.split('-')[0]] = evt.target.value;
        setCredentials(stateToChange);
    };

    async function handleLogin(e) {
        toggleLoginModal()
        changeIsLoggedIn("")
        await dbAPI.loginUser(credentials)
          .then((resp)=>{
            if (resp!==undefined){
              changeIsLoggedIn(false)
              changeIsLoggedIn(true)
            } else {
              changeIsLoggedIn(false)
            }
          });
      };

    return (
        <>
              <Form onSubmit={handleLogin}>
        <ModalHeader toggle={toggleLoginModal}>Login to Participate</ModalHeader>
            <ModalBody>
                <FormGroup>
                  {/* <Label for="email">Email</Label> */}
                  <Input onChange={handleFieldChange} type="username" id="username-login" placeholder="username" />
                </FormGroup>
                <FormGroup>
                  {/* <Label for="favoriteColor">Favorite Color</Label> */}
                  <Input onChange={handleFieldChange} type="password" id="password-login" placeholder="password" />
                </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" type="submit" onClick={handleLogin}>Login</Button>
            </ModalFooter>
              </Form>
        </>
    );

};

export default LoginForm;
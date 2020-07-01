import React, { useState } from 'react';
import {  ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Button } from "reactstrap"
import dbAPI from "../../../modules/dbAPI"

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

const SignUpForm = ({toggle, changeIsLoggedIn}) => {

    const [credentials, setCredentials] = useState({ username: "", email: "", password: "" });

  // Update state whenever an input field is edited
    const handleFieldChange = (evt) => {
        const stateToChange = { ...credentials };
        stateToChange[evt.target.id] = evt.target.value;
        setCredentials(stateToChange);
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        toggle()
        // sessionStorage.clear()
        // sessionStorage.setItem(
        //   'user',
        //   JSON.stringify(credentials)
        // );
        dbAPI.createNewUser(credentials);
        changeIsLoggedIn(true)
        // props.history.push('/')
      };

    return (
        <>
        <ModalHeader toggle={toggle}>Create a New Account</ModalHeader>
            <ModalBody>
              <Form onSubmit={handleSignUp}>
                <FormGroup>
                  {/* <Label for="username">Username</Label> */}
                  <Input onChange={handleFieldChange} type="username" name="username" id="username" placeholder="username" />
                </FormGroup>
                <FormGroup>
                  {/* <Label for="email">Email</Label> */}
                  <Input onChange={handleFieldChange} type="email" name="email" id="email" placeholder="email" />
                </FormGroup>
                <FormGroup>
                  {/* <Label for="favoriteColor">Favorite Color</Label> */}
                  <Input onChange={handleFieldChange} type="password" name="password" id="password" placeholder="password" />
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="success" type="submit" onClick={handleSignUp}>Sign Up</Button>
            </ModalFooter>
        </>
    );

};

export default SignUpForm;
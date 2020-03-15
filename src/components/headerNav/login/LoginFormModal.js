
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

const LoginFormModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  }
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  }
  const closeAfterLogin = () => {
    toggle()
    toggleAll()
  }

  // ********* Begin Login Code ************
  const [credentials, setCredentials] = useState({ username: "", email: "", favoriteColor: "" });

  // Update state whenever an input field is edited
  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    toggleNested()
    sessionStorage.clear()
    sessionStorage.setItem(
      'user',
      JSON.stringify(credentials)
    );
    props.changeIsLoggedIn(true)
    // props.history.push('/')
    };
  const goHome = () => {
    toggle()
  };

  return (
    <div>
      <Button id="navLogin" color="primary" onClick={goHome}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Create a Fake Account :)</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleLogin}>
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
              <Input onChange={handleFieldChange} type="password" name="favoriteColor" id="favoriteColor" placeholder="favorite color" />
            </FormGroup>
          </Form>
          <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
            <ModalHeader>Successful Login!</ModalHeader>
            <ModalBody>Session storage is now holding the information you typed as an object. One day that will actually mean something!</ModalBody>
            <ModalFooter>
              <Button color="success" onClick={toggleAll}>Get to Participating</Button>
            </ModalFooter>
          </Modal>
        </ModalBody>
        <ModalFooter>
        <Button color="primary" type="submit" onClick={handleLogin}>Login</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default LoginFormModal;
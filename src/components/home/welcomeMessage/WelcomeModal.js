
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert } from 'reactstrap';
import "./WelcomeModal.css"


const WelcomeModal = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(true);
  const toggle = () => setModal(!modal);
  
  const setActiveAnonymousUser = () => {
    return sessionStorage.setItem('user', JSON.stringify({'activeAnonymousUser': true}));
  }

  const setUserAndClearMessage = () => {
      toggle()
      setActiveAnonymousUser()
  }

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader className="welcomeHeader" toggle={toggle}>Welcome to Participate!</ModalHeader>
        <ModalBody>
            Participate is an open source civic education and engagement platform. We want to encourage and empower you to get back into your own life and community by providing easy access to information about your local governments, institutions, and systems.<br/><br/>Explore the different governments of the United States via our intuitive map system, or by searching for them directly in the map toolbar. Explore the rest of the site via the Navigation Bar.<br/><br/>Have fun, learn something new, and go Participate!
        </ModalBody>
        <ModalFooter>
          <Alert color="warning">
            Participate is a work in progress (literally and metaphorically). If you are a developer or have developing skills, please consider contributing to this open source project at our <a target="_blank" href="https://github.com/HalcyonVagabond/participate">GitHub repository</a> .
          </Alert>
          <Button color="primary" onClick={setUserAndClearMessage}>Get Started!</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default WelcomeModal;
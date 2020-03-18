
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import dbAPI from "../../../modules/dbAPI"
import classnames from 'classnames';
import LoginForm from "./LoginForm"
import SignUpForm from "./SignUpForm"


const LoginFormModal = (props) => {

  const [modal, setModal] = useState(false);

  const [activeTab, setActiveTab] = useState('1');

  const toggleTab = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  const toggle = () => setModal(!modal);

  const goHome = () => {
    toggle()
  };


  return (
    <div>
      <Button id="navLogin" color="primary" onClick={goHome}>Login</Button>
      <Modal isOpen={modal} toggle={toggle} className="loginPopUp">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { toggleTab('1'); }}
            >
              Login
          </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { toggleTab('2'); }}
            >
              Sign Up
          </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <LoginForm toggle={toggle} toggle={toggle} changeIsLoggedIn={props.changeIsLoggedIn} />
          </TabPane>
          <TabPane tabId="2">
            <SignUpForm toggle={toggle} toggle={toggle} changeIsLoggedIn={props.changeIsLoggedIn}/>
          </TabPane>
        </TabContent>
      </Modal>
    </div>
  );
}

export default LoginFormModal;
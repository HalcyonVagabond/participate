
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import dbAPI from "../../../modules/dbAPI"
import classnames from 'classnames';
import LoginForm from "./LoginForm"
import SignUpForm from "./SignUpForm"


const LoginFormModal = (props) => {

  const [loginModal, setLoginModal] = useState(false);

  const [activeTab, setActiveTab] = useState('1');

  const toggleTab = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  const toggleLoginModal = () => setLoginModal(!loginModal);

  const goHome = () => {
    toggleLoginModal()
  };


  return (
    <div>
      <Button className="navButton" onClick={goHome}>Login</Button>
      <Modal isOpen={loginModal} toggle={toggleLoginModal} className="loginPopUp">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { toggleTab('1'); }}
              style={{cursor: 'pointer'}}
            >
              Login
          </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { toggleTab('2'); }}
              style={{cursor: 'pointer'}}
            >
              Sign Up
          </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <LoginForm toggleLoginModal={toggleLoginModal} changeIsLoggedIn={props.changeIsLoggedIn} />
          </TabPane>
          <TabPane tabId="2">
            <SignUpForm toggleLoginModal={toggleLoginModal} changeIsLoggedIn={props.changeIsLoggedIn}/>
          </TabPane>
        </TabContent>
      </Modal>
    </div>
  );
}

export default LoginFormModal;
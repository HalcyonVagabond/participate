import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import "./NavBar.css"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  DropdownItem,
  Button,
  Modal,
  ModalHeader,
  ModalFooter
} from 'reactstrap';
import { Loader } from "semantic-ui-react"
import LoginFormModal from "./login/LoginFormModal"
import PrivacyToggle from "./privacyToggle/PrivacyToggle"
import dbAPI from "../../modules/dbAPI"

const NavBar = (props) => {

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [privacyMode, changePrivacyMode] = useState(false);
  const history = useHistory();
  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const [modalLogout, setModalLogout] = useState(false);
  const toggleLogout = () => {
    setModalLogout(!modalLogout)
  };

  function handleLogout(){
      sessionStorage.clear();
      sessionStorage.setItem('anonymousUser',true);
      setModalLogout(false)
      props.changeIsLoggedIn(false);
      history.push('/');
  }

  const checkIfLoggedIn = () => {
    if (sessionStorage.getItem('userId') === null && privacyMode === false && props.isLoggedIn === false) {
      return (
        <div>
        <NavItem>
          <LoginFormModal props={props} changeIsLoggedIn={props.changeIsLoggedIn} />
        </NavItem>
        </div>
      );
    } else if(props.isLoggedIn==="" && !sessionStorage.getItem('userId')){
      return (
        <NavItem>
          <Loader className='loadingNavbar' inverted>Loading</Loader>
        </NavItem>
      )
    } else if(privacyMode === false) {
      return (
          <NavItem>
          <Button className='navButton' onClick={toggleLogout}>Logout</Button>
          <Modal className='logoutModal' isOpen={modalLogout} toggle={toggleLogout}>
            <ModalHeader toggle={toggleLogout}>Are you sure you want to log out?</ModalHeader>
            <ModalFooter>
              <Button color="danger" onClick={handleLogout}>Logout</Button>
              <Button color="secondary" onClick={toggleLogout}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </NavItem>
      )
    }
  }

  useEffect(() => {
    checkIfLoggedIn()
  }, [sessionStorage, props.isLoggedIn])

  return (
    <Navbar className="navContainer" light expand="md">
      <NavbarBrand href="/"><img id="logo" src={require(`../../images/participateLogo.png`)} /></NavbarBrand>
      <NavbarToggler onClick={toggleNav} />
      <Collapse className="navDropDownContainer" isOpen={isNavOpen} navbar>
        <Nav className="mr-auto navLinksContainer" navbar>
          {/* <NavbarText>Government:  </NavbarText> */}
          <NavItem>
            <NavLink className="navLink" href="/">Governments</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="navLink" href="/elections">Elections</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="navLink" href="/learn">Learn</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="navLink" href="/about">About</NavLink>
          </NavItem>
          <DropdownItem divider />
          {/* <Popup
            trigger={<Icon size='large' name='heart' circular />}
            on='click'
            position='bottom center'
          > */}
        
            {/* <PrivacyToggle privacyMode={privacyMode} changePrivacyMode={changePrivacyMode} /> */}
      
        {/* </Popup> */}
        </Nav>
      </Collapse>
      {checkIfLoggedIn()}
    </Navbar>
  );
}

export default NavBar;
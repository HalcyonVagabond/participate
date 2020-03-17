import React, { useState, useEffect } from 'react';
import "./NavBar.css"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button
} from 'reactstrap';
import LoginFormModal from "./login/LoginFormModal"
import PrivacyToggle from "./privacyToggle/PrivacyToggle"

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [ privacyMode, changePrivacyMode ] = useState(false)

  const toggle = () => setIsOpen(!isOpen);

  const checkIfLoggedIn = () => {
    if(sessionStorage.getItem('user') === null && privacyMode === false) {

      return(
        <NavItem>
          <LoginFormModal props={props} className="loginPopUp" buttonLabel="Login" changeIsLoggedIn={props.changeIsLoggedIn} /> 
        </NavItem>
      ); 
    } else if(privacyMode === false) {
      return (
        <NavItem>
          <NavLink className="navLink" href="/myprofile"><Button color='primary'>My Profile</Button></NavLink>
        </NavItem>
      ) 
    } 
  }

  useEffect(() => {
    checkIfLoggedIn()
  }, [sessionStorage])

  return (
    <div>
      <Navbar className="navContainer" light expand="md">
        <NavbarBrand href="/"><img id="logo" src={require(`../../images/participateLogo1.png`)} /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse className="navDropDownContainer" isOpen={isOpen} navbar>
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
            {checkIfLoggedIn()}
            <NavItem>
              <PrivacyToggle privacyMode={privacyMode} changePrivacyMode={changePrivacyMode}/>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
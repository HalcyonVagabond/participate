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
import ProfileIconMenu from "./myProfile/ProfileIconMenu"
import PrivacyToggle from "./privacyToggle/PrivacyToggle"

const NavBar = (props) => {

  const Parse = require('parse/node');

  const [isOpen, setIsOpen] = useState(false);
  const [ privacyMode, changePrivacyMode ] = useState(false)

  const toggle = () => setIsOpen(!isOpen);

  const checkIfLoggedIn = () => {
    if(sessionStorage.getItem('sessionToken') === null && privacyMode === false) {
      console.log(Parse.User.current())
      return(
        <NavItem>
          <LoginFormModal props={props} changeIsLoggedIn={props.changeIsLoggedIn} /> 
        </NavItem>
      ); 
    } else if(privacyMode === false) {
      return (
        <ProfileIconMenu />
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
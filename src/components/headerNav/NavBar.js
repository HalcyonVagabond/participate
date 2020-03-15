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
import {Checkbox} from "semantic-ui-react"
import LoginFormModal from "./login/LoginFormModal"
import PrivacyToggle from "./PrivacyToggle"

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const checkIfLoggedIn = () => {
    if(sessionStorage.getItem('user') === null) {
      return <LoginFormModal props={props} className="loginPopUp" buttonLabel="Login" changeIsLoggedIn={props.changeIsLoggedIn} />
    } else {
      return <NavLink className="navLink" href="/myprofile"><Button color='primary'>My Profile</Button></NavLink>
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
          </Nav>
        </Collapse>
        {checkIfLoggedIn()}
        
      </Navbar>
      <Checkbox slider />
    </div>
  );
}

export default NavBar;
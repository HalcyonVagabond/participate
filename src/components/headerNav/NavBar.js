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
import { Loader } from "semantic-ui-react"
import LoginFormModal from "./login/LoginFormModal"
import ProfileIconMenu from "./myProfile/ProfileIconMenu"
import PrivacyToggle from "./privacyToggle/PrivacyToggle"
import dbAPI from "../../modules/dbAPI"

const NavBar = (props) => {

  const Parse = require('parse/node');

  const [isOpen, setIsOpen] = useState(false);
  const [privacyMode, changePrivacyMode] = useState(false)

  const toggle = () => setIsOpen(!isOpen);

  const checkIfLoggedIn = () => {
    if (sessionStorage.getItem('userId') === null && privacyMode === false) {
      return (
        <div>
        <NavItem>
          <LoginFormModal props={props} changeIsLoggedIn={props.changeIsLoggedIn} />
        </NavItem>
        </div>
      );
    } else if(props.isLoggedIn && !sessionStorage.getItem('userId')){
      return (
        <NavItem>
          <Loader inverted>Loading</Loader>
        </NavItem>
      )
    } else if(privacyMode === false) {
      return (
          <NavItem>
            <Button color='primary' onClick={() => {
              sessionStorage.clear()
              props.changeIsLoggedIn(false)
            }}>Logout</Button>
          </NavItem>
      )
    }
  }

  useEffect(() => {
    checkIfLoggedIn()
  }, [props.isLoggedIn])

  return (
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
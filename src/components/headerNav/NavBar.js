import React, { useState } from 'react';
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

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  // const loginPopUp = () => {
  //   const [modal, setModal] = useState(false);
  //   const [nestedModal, setNestedModal] = useState(false);
  //   const [closeAll, setCloseAll] = useState(false);
  
  //   const toggle = () => setModal(!modal);
  //   const toggleNested = () => {
  //     setNestedModal(!nestedModal);
  //     setCloseAll(false);
  //   }
  //   const toggleAll = () => {
  //     setNestedModal(!nestedModal);
  //     setCloseAll(true);
  //   }
     
  // }

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
        <LoginFormModal props={props} className="loginPopUp" buttonLabel="Login"/>
      </Navbar>
    </div>
  );
}

export default NavBar;
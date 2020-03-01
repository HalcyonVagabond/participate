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
  NavbarText
} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

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
              <NavLink className="navLink" href="/states">Learn</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navLink" href="/federal">About</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
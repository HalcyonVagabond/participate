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
              <NavLink className="navLink" href="/cities">City</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navLink" href="/counties">County</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navLink" href="/states">State</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navLink" href="/federal">Federal</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
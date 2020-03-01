import React, { useState } from 'react';
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
import "./Footer.css"

const Footer = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="footerContainer" id="mainFooter">
      <Navbar className="footer" light expand="md">
        <NavbarBrand href="/">participate</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto footerLinks" navbar>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/"></NavLink>
            </NavItem>
            <UncontrolledDropdown direction="up" nav inNavbar>
              <DropdownToggle nav caret>
                Donate
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Patreon
                </DropdownItem>
                <DropdownItem>
                  Venmo
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Ways to Donate
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>😊</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Footer;
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
  NavbarText,
  Alert
} from 'reactstrap';
import "./Footer.css"

const Footer = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="footerContainer" id="mainFooter">
      <Alert color="danger" style={{marginBottom: '0 !important'}}>
        This is a demo of work in progress. Click on Tennessee and search for State Level to see the most content.
      </Alert>
      <Navbar className="footer" light expand="md">
        <NavbarBrand href="/">participate</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto footerLinks" navbar>
            <NavItem>
              <NavLink target="_blank" href="https://github.com/HalcyonVagabond/participate">GitHub</NavLink>
            </NavItem>
            <NavItem>
              <NavLink target="_blank" href="https://github.com/HalcyonVagabond/participate">Contact</NavLink>
            </NavItem>
            {/* <UncontrolledDropdown direction="up" nav inNavbar>
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
            </UncontrolledDropdown> */}
          </Nav>
          <NavbarText>😊</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Footer;